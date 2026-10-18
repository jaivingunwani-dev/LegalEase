function DemoLogin({ onDemoLogin }) {
  return (
    <div className="demo-login-box">
      <span className="demo-label">Quick Testing:</span>
      <div className="demo-buttons-row">
        <button
          type="button"
          className="demo-pill-btn"
          onClick={() => onDemoLogin("client")}
        >
          ⚡ Demo Client
        </button>
        <button
          type="button"
          className="demo-pill-btn"
          onClick={() => onDemoLogin("lawyer")}
        >
          ⚡ Demo Attorney
        </button>
      </div>
    </div>
  );
}

export default DemoLogin;
