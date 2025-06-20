export default function Tooltip({ 
  children, 
  text, 
  position = "top", 
  className = "" 
}) {
  const tooltipPosition = position === "top" 
    ? "bottom-full mb-4" 
    : "top-full mt-4";

  return (
    <div className="relative inline-block group">
      {children}
      <span
        className={`absolute left-1/2 transform -translate-x-1/2 whitespace-nowrap px-2 py-1 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50 ${tooltipPosition} ${className}`}
      >
        {text}
      </span>
    </div>
  );
}
