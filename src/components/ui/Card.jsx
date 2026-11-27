import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const Card = ({ 
  children, 
  className = '',
  hover = true,
  padding = true,
  ...props 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={hover ? { y: -10 } : {}}
      className={clsx(
        'bg-white rounded-xl shadow-lg overflow-hidden',
        hover && 'transition-all duration-300 hover:shadow-2xl',
        padding && 'p-6',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const CardHeader = ({ children, className = '' }) => (
  <div className={clsx('border-b border-stone-200 pb-4 mb-4', className)}>
    {children}
  </div>
);

export const CardBody = ({ children, className = '' }) => (
  <div className={clsx('', className)}>
    {children}
  </div>
);

export const CardFooter = ({ children, className = '' }) => (
  <div className={clsx('border-t border-stone-200 pt-4 mt-4', className)}>
    {children}
  </div>
);

export default Card;