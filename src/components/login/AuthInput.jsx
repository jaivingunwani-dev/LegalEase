import { useState } from "react";

function AuthInput({
  id,
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  icon,
  error,
  required = false,
  autoComplete = "off",
  helperText
}) {
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordField = type === "password";
  const actualType = isPasswordField ? (showPassword ? "text" : "password") : type;

  return (
    <div className={`auth-input-group ${error ? "has-error" : ""}`}>
      {label && (
        <label htmlFor={id} className="auth-input-label">
          <span>{label}</span>
          {required && <span className="required-asterisk">*</span>}
        </label>
      )}

      <div className="auth-input-wrapper">
        {icon && <span className="auth-input-icon">{icon}</span>}

        <input
          id={id}
          name={name}
          type={actualType}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          autoComplete={autoComplete}
          className={`auth-input-control ${icon ? "has-icon-left" : ""} ${isPasswordField ? "has-icon-right" : ""}`}
        />

        {isPasswordField && (
          <button
            type="button"
            className="auth-input-toggle-btn"
            onClick={() => setShowPassword(!showPassword)}
            title={showPassword ? "Hide password" : "Show password"}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? "🙈" : "👁️"}
          </button>
        )}
      </div>

      {error ? (
        <span className="auth-input-error-msg">⚠️ {error}</span>
      ) : (
        helperText && <span className="auth-input-helper-msg">{helperText}</span>
      )}
    </div>
  );
}

export default AuthInput;
