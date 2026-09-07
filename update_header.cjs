const fs = require('fs');
let code = fs.readFileSync('src/components/Header.tsx', 'utf8');

// Replace imports
code = code.replace(
  "import { motion } from 'motion/react';",
  "import { motion, useScroll, useMotionValueEvent } from 'motion/react';\nimport { useState } from 'react';"
);

// Replace component beginning
code = code.replace(
  "  const currentPath = location.pathname;\n\n  return (\n    <header className=\"fixed",
  `  const currentPath = location.pathname;
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header 
      variants={{ visible: { y: 0 }, hidden: { y: "-150%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed`
);

// Remove transition-all duration-300 from classname to avoid conflicting with framer-motion's transform animation, keep only colors/shadow transitions if needed, but framer-motion handles it well. 
// Actually I'll just let framer motion handle y transform. 
code = code.replace("shadow-sm transition-all duration-300", "shadow-sm");

code = code.replace("    </header>", "    </motion.header>");

fs.writeFileSync('src/components/Header.tsx', code);
console.log("Updated Header.tsx");
