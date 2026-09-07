import { useEffect, useRef } from 'react';

export default function Shader() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) return;

    let animationFrameId: number;

    const syncSize = () => {
      const w = canvas.clientWidth || 1280;
      const h = canvas.clientHeight || 720;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    };

    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(syncSize);
      resizeObserver.observe(canvas);
    }
    syncSize();

    const vs = `attribute vec2 a_position;
varying vec2 v_texCoord;
void main() {
  v_texCoord = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}`;
    const fs = `precision highp float;
uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
}

float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
    for (int i = 0; i < 5; i++) {
        v += a * noise(p);
        p = rot * p * 2.02 + vec2(100.0);
        a *= 0.5;
    }
    return v;
}

float fabricFolds(vec2 p, float t, vec2 m) {
    vec2 q = p;
    vec2 dMouse = q - m;
    float distM = length(dMouse);
    q += (dMouse / (distM * 4.0 + 1.0)) * 0.08 * sin(t * 1.5);
    
    float fold1 = sin(q.x * 1.8 + sin(q.y * 1.4 + t * 0.2) * 1.2 + t * 0.2);
    float fold2 = cos(q.y * 2.0 + sin(q.x * 1.6 - t * 0.2) * 1.0 - t * 0.15);
    float fold3 = sin((q.x + q.y) * 1.6 + t * 0.25) * 0.4;
    
    float elevation = fold1 * 0.55 + fold2 * 0.35 + fold3 * 0.1;
    return elevation;
}

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    vec2 p = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / min(u_resolution.x, u_resolution.y);
    vec2 m = (u_mouse.xy * 2.0 - u_resolution.xy) / min(u_resolution.x, u_resolution.y);
    
    float t = u_time * 0.25;
    
    float h = fabricFolds(p * 1.3, t, m);
    
    float eps = 0.015;
    float hR = fabricFolds((p + vec2(eps, 0.0)) * 1.3, t, m);
    float hU = fabricFolds((p + vec2(0.0, eps)) * 1.3, t, m);
    vec3 normal = normalize(vec3((h - hR) / eps, (h - hU) / eps, 0.6));
    
    vec3 lightDir1 = normalize(vec3(0.6, 0.9, 0.7));   
    vec3 lightDir2 = normalize(vec3(-0.8, -0.4, 0.5)); 
    
    float diff1 = max(dot(normal, lightDir1), 0.0);
    float diff2 = max(dot(normal, lightDir2), 0.0);
    
    vec3 viewDir = vec3(0.0, 0.0, 1.0);
    vec3 half1 = normalize(lightDir1 + viewDir);
    float spec1 = pow(max(dot(normal, half1), 0.0), 24.0);
    
    vec2 weaveCoord = uv * vec2(u_resolution.x / 4.0, u_resolution.y / 4.0);
    float weave = sin(weaveCoord.x * 0.5) * cos(weaveCoord.y * 0.5);
    float microFibers = fbm(uv * 18.0 + vec2(h * 0.2, t * 0.05)) * 0.18;
    
    vec3 baseColor = vec3(0.98, 0.97, 0.96);
    vec3 midColor  = vec3(0.94, 0.92, 0.88);
    vec3 silkSheen = vec3(1.0, 0.99, 0.98); 
    vec3 darkFold  = vec3(0.85, 0.82, 0.78);
    
    vec3 col = mix(darkFold, baseColor, smoothstep(-0.8, 0.2, h));
    col = mix(col, midColor, diff1 * 0.75 + diff2 * 0.35);
    
    col += silkSheen * (spec1 * 0.85);
    col += (microFibers + weave * 0.04) * 0.15 * (diff1 + 0.2);
    
    float vignette = smoothstep(1.4, 0.3, length(p));
    col *= vignette;
    
    col = pow(col, vec3(0.92));
    
    gl_FragColor = vec4(col, 0.95);
}`;

    const cs = (type: number, src: string) => {
      const s = (gl as WebGLRenderingContext).createShader(type)!;
      (gl as WebGLRenderingContext).shaderSource(s, src);
      (gl as WebGLRenderingContext).compileShader(s);
      return s;
    };

    const prog = gl.createProgram()!;
    gl.attachShader(prog, cs(gl.VERTEX_SHADER, vs));
    gl.attachShader(prog, cs(gl.FRAGMENT_SHADER, fs));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);

    const pos = gl.getAttribLocation(prog, 'a_position');
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, 'u_time');
    const uRes = gl.getUniformLocation(prog, 'u_resolution');
    const uMouse = gl.getUniformLocation(prog, 'u_mouse');

    let mouse = { x: canvas.width / 2, y: canvas.height / 2 };
    
    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width && rect.height) {
        const nx = (event.clientX - rect.left) / rect.width;
        const ny = 1.0 - (event.clientY - rect.top) / rect.height;
        mouse.x = nx * canvas.width;
        mouse.y = ny * canvas.height;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);

    let startTime = performance.now();
    const render = (t: number) => {
      if (!resizeObserver) syncSize();
      gl.viewport(0, 0, canvas.width, canvas.height);
      if (uTime) gl.uniform1f(uTime, (t - startTime) * 0.001);
      if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
      if (uMouse) gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationFrameId = requestAnimationFrame(render);
    };
    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      if (resizeObserver) resizeObserver.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="block w-full h-full" />;
}
