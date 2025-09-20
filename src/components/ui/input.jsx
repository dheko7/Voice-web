export function Input({ className, ...props }) {
  return (
    <input
      {...props}
      className={`w-full px-4 py-3 rounded-xl border border-white/20 bg-black/40 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 hover:border-white/30 ${className || ''}`}
    />
  );
}