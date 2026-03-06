import React from 'react';
import { motion } from 'framer-motion';

// Animation component for text that splits by words
export const SplitText = ({ children, className = "", delay = 0 }) => {
  const textWords = children.split(' ');
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: delay }
    })
  };

  const wordVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      }
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      }
    }
  };

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {textWords.map((word, index) => (
        <motion.span
          key={index}
          variants={wordVariants}
          style={{ display: 'inline-block', marginRight: '8px' }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

// Blur Text Animation Component
export const BlurText = ({ children, className = "", delay = 0 }) => {
  const letters = children.split('');

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: delay
      }
    }
  };

  const child = {
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      }
    },
    hidden: {
      opacity: 0,
      filter: 'blur(8px)',
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      }
    }
  };

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{ display: 'inline-block' }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

// Gradient Text Animation Component
export const GradientText = ({ children, className = "" }) => {
  return (
    <motion.div
      className={`gradient-text ${className}`}
      initial={{ backgroundPosition: '0% 50%' }}
      animate={{ 
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      }}
      transition={{
        duration: 3,
        ease: 'linear',
        repeat: Infinity,
      }}
      style={{
        background: 'linear-gradient(90deg, #ff6b35, #ffd23f, #f7931e, #ff6b35)',
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}
    >
      {children}
    </motion.div>
  );
};

// Text Type Animation Component
export const TextType = ({ children, className = "", speed = 50 }) => {
  const [displayedText, setDisplayedText] = React.useState('');
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    if (currentIndex < children.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + children[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, children, speed]);

  return (
    <motion.div 
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
      >
        |
      </motion.span>
    </motion.div>
  );
};

// Fade In Up Animation Component
export const FadeInUp = ({ children, delay = 0, className = "" }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8, 
        delay,
        type: "spring",
        damping: 20,
        stiffness: 100
      }}
    >
      {children}
    </motion.div>
  );
};

// Scale In Animation Component
export const ScaleIn = ({ children, delay = 0, className = "" }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        delay,
        type: "spring",
        damping: 20,
        stiffness: 100
      }}
    >
      {children}
    </motion.div>
  );
};

// Slide In From Left Animation Component
export const SlideInLeft = ({ children, delay = 0, className = "" }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ 
        duration: 0.8, 
        delay,
        type: "spring",
        damping: 20,
        stiffness: 100
      }}
    >
      {children}
    </motion.div>
  );
};

// Slide In From Right Animation Component
export const SlideInRight = ({ children, delay = 0, className = "" }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ 
        duration: 0.8, 
        delay,
        type: "spring",
        damping: 20,
        stiffness: 100
      }}
    >
      {children}
    </motion.div>
  );
};

export default {
  SplitText,
  BlurText,
  GradientText,
  TextType,
  FadeInUp,
  ScaleIn,
  SlideInLeft,
  SlideInRight
};