export function Badge({ children, className, variant = "default", ...props }) {
  const variants = {
    default: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
    secondary: "bg-white/10 text-white border border-white/20",
    success: "bg-green-500/20 text-green-400 border border-green-500/30",
    warning: "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30",
    error: "bg-red-500/20 text-red-400 border border-red-500/30"
  };
  
  return (
    <span
      {...props}
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${variants[variant]} ${className || ''}`}
    >
      {children}
    </span>
  );
}