import { useState } from "react";
import AuthInput from "./AuthInput";

function LoginForm({
  activeRole,
  onSubmit,
  onForgotPasswordClick,
  isLoading,
  formError
}) {
  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
    rememberMe: false
  });

  const [errors, setErrors] = useState({});

  const isLawyer = activeRole === "lawyer";

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));

    // Clear individual field error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.identifier.trim()) {
      newErrors.identifier = isLawyer
        ? "Please enter your registered email or Bar Council ID"
        : "Please enter your registered email or mobile number";
    } else if (
      formData.identifier.includes("@") &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.identifier)
    ) {
      newErrors.identifier = "Please enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Please enter your account password";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit} noValidate>
      {formError && (
        <div className="login-form-alert error" role="alert">
          <span className="alert-icon">⚠️</span>
          <span>{formError}</span>
        </div>
      )}

      {/* Identifier Input */}
      <AuthInput
        id="login-identifier"
        name="identifier"
        label={isLawyer ? "Bar Council ID or Registered Email" : "Email or Phone Number"}
        type="text"
        value={formData.identifier}
        onChange={handleChange}
        placeholder={
          isLawyer
            ? "e.g. D/1234/2021 or advocate@legalease.in"
            : "e.g. yourname@email.com or 9876543210"
        }
        icon={isLawyer ? "📜" : "✉️"}
        error={errors.identifier}
        required
        autoComplete="username"
      />

      {/* Password Input */}
      <AuthInput
        id="login-password"
        name="password"
        label="Password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Enter your confidential password"
        icon="🔒"
        error={errors.password}
        required
        autoComplete="current-password"
      />

      {/* Options Row (Remember Me & Forgot Password) */}
      <div className="form-options-row">
        <label className="remember-me-label">
          <input
            type="checkbox"
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={handleChange}
            className="custom-checkbox"
          />
          <span>Remember me for 30 days</span>
        </label>

        <button
          type="button"
          className="forgot-password-link"
          onClick={onForgotPasswordClick}
        >
          Forgot Password?
        </button>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className={`login-submit-btn ${isLoading ? "loading" : ""}`}
        disabled={isLoading}
      >
        {isLoading ? (
          <span className="submit-loading-state">
            <span className="spinner"></span>
            <span>Signing in securely...</span>
          </span>
        ) : (
          <span className="submit-normal-state">
            <span>Sign In to Account</span>
            <span className="submit-arrow">→</span>
          </span>
        )}
      </button>
    </form>
  );
}

export default LoginForm;
