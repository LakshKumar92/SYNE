const fs = require('fs');
let code = fs.readFileSync('src/components/Shader.tsx', 'utf8');

code = code.replace(/vec3 baseColor = vec3\([^)]+\);/, 'vec3 baseColor = vec3(0.98, 0.97, 0.96);');
code = code.replace(/vec3 midColor\s*= vec3\([^)]+\);/, 'vec3 midColor  = vec3(0.94, 0.92, 0.88);');
code = code.replace(/vec3 silkSheen = vec3\([^)]+\);/, 'vec3 silkSheen = vec3(1.0, 0.99, 0.98);');
code = code.replace(/vec3 darkFold\s*= vec3\([^)]+\);/, 'vec3 darkFold  = vec3(0.85, 0.82, 0.78);');

fs.writeFileSync('src/components/Shader.tsx', code);
console.log('Shader colors updated');
