export default function Button({ children, className, variant = "primary", size = "md", ...props }) {
  const baseClasses = "font-semibold transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black";
  
  const variants = {
    primary: "btn-primary text-black hover:scale-105 focus:ring-emerald-500",
    secondary: "glass text-white border border-white/20 hover:bg-white/10 hover:border-white/30 focus:ring-white/50",
    outline: "border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-black focus:ring-emerald-500",
    ghost: "text-white hover:bg-white/10 focus:ring-white/50"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-6 py-3 text-base rounded-xl",
    lg: "px-8 py-4 text-lg rounded-xl",
    xl: "px-10 py-5 text-xl rounded-2xl"
  };
  
  return (
    <button
      {...props}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className || ''}`}
    >
      {children}
    </button>
  );
}
