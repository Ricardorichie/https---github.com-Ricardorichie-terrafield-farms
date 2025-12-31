import React from 'react';
import { Link } from 'react-router-dom';

export const Button = ({ children, variant = 'primary', to, className = '', ...props }) => {
  const baseClass = `btn btn-${variant} ${className}`;
  
  if (to) {
    return <Link to={to} className={baseClass} {...props}>{children}</Link>;
  }
  
  return <button className={baseClass} {...props}>{children}</button>;
};

export const Card = ({ children, className = '', ...props }) => {
  return <div className={`card ${className}`} {...props}>{children}</div>;
};

export const Section = ({ children, className = '', id = '' }) => {
  return <section id={id} className={`section ${className}`}>{children}</section>;
};

export const Badge = ({ children, variant = 'primary', className = '' }) => {
  const colors = {
    primary: 'bg-primary/10 text-primary',
    secondary: 'bg-secondary/10 text-secondary',
    accent: 'bg-accent/10 text-accent-dark',
    neutral: 'bg-gray-100 text-gray-600',
    outline: 'border border-gray-200 text-gray-600'
  };
  
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colors[variant]} ${className}`}>
      {children}
    </span>
  );
};
