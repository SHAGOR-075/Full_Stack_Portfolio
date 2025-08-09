import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const SkillBar = ({ skill, level, index }) => {
  const [isAnimated, setIsAnimated] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (isInView) {
      setIsAnimated(true);
    }
  }, [isInView]);
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="mb-6"
    >
      <div className="flex justify-between mb-2">
        <span className="font-medium text-gray-800 dark:text-gray-200">{skill}</span>
        <span className="text-gray-600 dark:text-gray-400">{level}%</span>
      </div>
      <div className="skill-bar">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isAnimated ? `${level}%` : 0 }}
          transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: "easeOut" }}
          className="skill-progress"
        />
      </div>
    </motion.div>
  );
};

export default SkillBar;
