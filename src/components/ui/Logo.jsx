export default function Logo({ className = "", size = "md" }) {
  const sizes = {
    sm: "w-6 h-6",
    md: "w-8 h-8", 
    lg: "w-12 h-12",
    xl: "w-16 h-16"
  };

  return (
    <div className={`${sizes[size]} ${className}`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Círculo exterior */}
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        
        {/* Tijeras - hoja superior izquierda */}
        <path
          d="M35 35 L45 25 L50 30 L40 40 Z"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="1"
        />
        
        {/* Tijeras - hoja superior derecha */}
        <path
          d="M65 35 L55 25 L50 30 L60 40 Z"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="1"
        />
        
        {/* Tijeras - mango izquierdo */}
        <path
          d="M35 35 L30 45 L35 50 L40 40 Z"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="1"
        />
        
        {/* Tijeras - mango derecho */}
        <path
          d="M65 35 L70 45 L65 50 L60 40 Z"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="1"
        />
        
        {/* Circuitos - nodos izquierdos */}
        <circle cx="25" cy="30" r="2" fill="currentColor" />
        <circle cx="25" cy="40" r="2" fill="currentColor" />
        <circle cx="25" cy="50" r="2" fill="currentColor" />
        
        {/* Circuitos - líneas izquierdas */}
        <line x1="25" y1="30" x2="25" y2="40" stroke="currentColor" strokeWidth="1" />
        <line x1="25" y1="40" x2="25" y2="50" stroke="currentColor" strokeWidth="1" />
        <line x1="25" y1="30" x2="35" y2="35" stroke="currentColor" strokeWidth="1" />
        
        {/* Circuitos - nodos derechos */}
        <circle cx="75" cy="30" r="2" fill="currentColor" />
        <circle cx="75" cy="40" r="2" fill="currentColor" />
        <circle cx="75" cy="50" r="2" fill="currentColor" />
        
        {/* Circuitos - líneas derechas */}
        <line x1="75" y1="30" x2="75" y2="40" stroke="currentColor" strokeWidth="1" />
        <line x1="75" y1="40" x2="75" y2="50" stroke="currentColor" strokeWidth="1" />
        <line x1="75" y1="30" x2="65" y2="35" stroke="currentColor" strokeWidth="1" />
        
        {/* Conexiones adicionales */}
        <line x1="25" y1="50" x2="35" y2="50" stroke="currentColor" strokeWidth="1" />
        <line x1="75" y1="50" x2="65" y2="50" stroke="currentColor" strokeWidth="1" />
      </svg>
    </div>
  );
}
