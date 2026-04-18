
const Button = ({ children, variant = "primary", className, ...props }) => {
  const variants = {
    primary: "bg-blue-800 text-white hover:bg-blue-900 shadow-blue-200 shadow-lg",
    secondary: "bg-gray-100 text-gray-500 hover:bg-gray-200",
    outline: "border-2 border-gray-100 text-gray-600 hover:bg-gray-50",
  };

  return (
    <button
      
      className={`w-full py-3 rounded-xl font-bold transition-all active:scale-95 flex items-center justify-center gap-2 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;