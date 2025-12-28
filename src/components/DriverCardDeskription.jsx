import React from 'react';
import '../components.css';

export function Button({ children, onClick, className = '', style, disabled = false }) {
  return (
    <button
      className={`custom-button ${className} ${disabled ? 'disabled' : ''}`}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {children}
    </button>
  );
}

// Компонент Dialog
export function Dialog({
  open,
  onOpenChange,
  children,
  className,
  showCloseButton = true,
  ...props
}) {
  if (!open) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onOpenChange(false);
    }
  };

  return (
    <div 
      className="dialog-overlay" 
      onClick={handleOverlayClick}
    >
      <div 
        className={`dialog-content ${className || ''}`}
        {...props}
      >
        {children}
        {showCloseButton && (
          <button
            className="dialog-close"
            onClick={() => onOpenChange(false)}
            aria-label="Close"
          >
            ×
          </button>
        )}
      </div>
    </div>
  );
}

export function DialogHeader({ className, children, ...props }) {
  return (
    <div 
      className={`dialog-header ${className || ''}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function DialogTitle({ className, children, ...props }) {
  return (
    <h2 
      className={`dialog-title ${className || ''}`}
      {...props}
    >
      {children}
    </h2>
  );
}

export function DialogContent({ className, children, ...props }) {
  return (
    <div 
      className={`dialog-body ${className || ''}`}
      {...props}
    >
      {children}
    </div>
  );
}
