import React from 'react';

const Button = ({ children, variant = 'primary', className = '', onClick, type = 'button', icon: Icon }) => {
  const baseClasses = variant === 'primary' ? 'btn-primary' : variant === 'outline' ? 'btn-outline' : 'btn-teal';
  
  return (
    <button 
      type={type} 
      className={`${baseClasses} ${className}`} 
      onClick={onClick}
    >
      {children}
      {Icon && <Icon size={18} />}
    </button>
  );
};

export default Button;
