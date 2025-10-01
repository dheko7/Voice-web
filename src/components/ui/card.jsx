export function Card({ children, className, hover = false, ...props }) {
  return (
    <div 
      {...props}
      className={`card-glass rounded-2xl p-6 transition-all duration-300 ${hover ? 'hover-lift' : ''} ${className || ''}`}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className }) {
  return <div className={`mb-6 ${className || ''}`}>{children}</div>;
}

export function CardTitle({ children, className }) {
  return <h3 className={`text-2xl font-bold text-white ${className || ''}`}>{children}</h3>;
}

export function CardDescription({ children, className }) {
  return <p className={`text-white/70 mt-2 ${className || ''}`}>{children}</p>;
}

export function CardContent({ children, className }) {
  return <div className={className || ''}>{children}</div>;
}

export function CardFooter({ children, className }) {
  return <div className={`mt-6 pt-6 border-t border-white/10 ${className || ''}`}>{children}</div>;
}
