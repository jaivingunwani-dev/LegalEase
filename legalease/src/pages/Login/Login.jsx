import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginHeader from "./components/LoginHeader.jsx";
import DemoLogin from "./components/DemoLogin.jsx";
import LoginForm from "./components/LoginForm.jsx";
import LoginSuccess from "./components/LoginSuccess.jsx";
import ForgotPasswordModal from "./components/ForgotPasswordModal.jsx";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [userRole, setUserRole] = useState("client");
  const [authMode, setAuthMode] = useState("signin");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [barNumber, setBarNumber] = useState("");
  const [practiceArea, setPracticeArea] = useState("Criminal Defense");
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotSubmitted, setForgotSubmitted] = useState(false);

  function handleRoleChange(role) {
    setUserRole(role);
    setErrorMsg("");
  }

  function handleDemoLogin(role) {
    setIsSubmitting(true);
    setErrorMsg("");

    setTimeout(() => {
      setIsSubmitting(false);

      if (role === "client") {
        setLoggedInUser({
          name: "Eleanor Vance",
          email: "eleanor.vance@example.com",
          role: "Client",
          avatar: "EV"
        });
      } else {
        setUserRole("lawyer");
        setLoggedInUser({
          name: "Marcus Sterling, Esq.",
          email: "m.sterling@legalease.com",
          role: "Verified Attorney",
          barNumber: "CA-984210",
          avatar: "MS"
        });
      }
    }, 600);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setErrorMsg("");

    if (!email.trim() || !password.trim()) {
      setErrorMsg("Please provide both email and password.");
      return;
    }

    if (authMode === "register" && !name.trim()) {
      setErrorMsg("Please enter your full legal name.");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setLoggedInUser({
        name:
          name.trim() ||
          (userRole === "lawyer"
            ? "Counselor " + email.split("@")[0]
            : email.split("@")[0]),
        email: email.trim(),
        role: userRole === "lawyer" ? "Verified Attorney" : "Client",
        barNumber: userRole === "lawyer" ? barNumber || "NY-552914" : null,
        avatar: (name.trim() || email.slice(0, 2)).toUpperCase()
      });
    }, 800);
  }

  function handleLogout() {
    setLoggedInUser(null);
    setEmail("");
    setPassword("");
    setName("");
  }

  function handleForgotSubmit(e) {
    e.preventDefault();

    if (!forgotEmail) return;

    setForgotSubmitted(true);

    setTimeout(() => {
      setForgotSubmitted(false);
      setShowForgotModal(false);
      setForgotEmail("");
    }, 2500);
  }

  function handleAuthModeChange(mode) {
    setAuthMode(mode);
    setErrorMsg("");
  }

  return (
    <div className="login-page">
      <div className="container login-container">
        {loggedInUser ? (
          <LoginSuccess
            user={loggedInUser}
            onBrowse={() => navigate("/search")}
            onLogout={handleLogout}
          />
        ) : (
          <div className="auth-card">
            <LoginHeader
              userRole={userRole}
              authMode={authMode}
              onRoleChange={handleRoleChange}
            />

            <DemoLogin onDemoLogin={handleDemoLogin} />

            <div className="auth-divider">
              <span>or enter details</span>
            </div>

            <LoginForm
              authMode={authMode}
              userRole={userRole}
              name={name}
              email={email}
              password={password}
              barNumber={barNumber}
              practiceArea={practiceArea}
              rememberMe={rememberMe}
              showPassword={showPassword}
              isSubmitting={isSubmitting}
              errorMsg={errorMsg}
              onNameChange={setName}
              onEmailChange={setEmail}
              onPasswordChange={setPassword}
              onBarNumberChange={setBarNumber}
              onPracticeAreaChange={setPracticeArea}
              onRememberMeChange={setRememberMe}
              onTogglePassword={() => setShowPassword(!showPassword)}
              onForgotPassword={() => setShowForgotModal(true)}
              onSubmit={handleSubmit}
              onAuthModeChange={handleAuthModeChange}
            />
          </div>
        )}

        {showForgotModal && (
          <ForgotPasswordModal
            forgotEmail={forgotEmail}
            forgotSubmitted={forgotSubmitted}
            onEmailChange={setForgotEmail}
            onSubmit={handleForgotSubmit}
            onClose={() => setShowForgotModal(false)}
          />
        )}
      </div>
    </div>
  );
}

export default Login;
