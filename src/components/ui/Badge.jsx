import React from 'react';
import clsx from 'clsx';

const Badge = ({ children, variant = 'primary', size = 'md', className = '' }) => {
  const variants = {
    primary: 'bg-sky-50 text-sky-700',
    secondary: 'bg-stone-100 text-stone-700',
    success: 'bg-sky-50 text-sky-700',
    danger: 'bg-red-100 text-red-800',
    warning: 'bg-amber-100 text-amber-800',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-sm',
    lg: 'px-3 py-1.5 text-base',
  };

  return (
    <span className={clsx('inline-flex items-center font-medium rounded-full', variants[variant], sizes[size], className)}>
      {children}
    </span>
  );
};

export default Badge;