import "./Button.css";

// A reusable button.
// "variant" controls the style (primary = solid gold, outline = bordered).
// "type" lets this be used as a real submit button when needed.
function Button({ children, onClick, variant = "primary", type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn btn-${variant}`}
    >
      {children}
    </button>
  );
}

export default Button;
