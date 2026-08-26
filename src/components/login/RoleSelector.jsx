function RoleSelector({ activeRole, onSelectRole }) {
  const roles = [
    {
      id: "client",
      label: "Client / Citizen",
      icon: "👤",
      description: "Seeking legal advice, consultation & services"
    },
    {
      id: "lawyer",
      label: "Advocate / Lawyer",
      icon: "⚖️",
      description: "Verified legal practitioners & law firms"
    }
  ];

  return (
    <div className="role-selector-container">
      <div className="role-selector-header">
        <span className="role-selector-title">I am signing in as:</span>
      </div>

      <div className="role-tabs">
        {roles.map((role) => {
          const isActive = activeRole === role.id;
          return (
            <button
              key={role.id}
              type="button"
              className={`role-tab-btn ${isActive ? "active" : ""}`}
              onClick={() => onSelectRole(role.id)}
            >
              <span className="role-tab-icon">{role.icon}</span>
              <span className="role-tab-label">{role.label}</span>
              {isActive && <span className="active-dot">●</span>}
            </button>
          );
        })}
      </div>

      <p className="role-hint">
        {activeRole === "lawyer"
          ? "🔐 Use your Bar Council registered email or enrollment ID to access your practitioner dashboard."
          : "✨ Access your case consultations, booked appointments, and saved lawyers."}
      </p>
    </div>
  );
}

export default RoleSelector;
