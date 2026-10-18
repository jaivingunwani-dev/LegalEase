import { Link } from "react-router-dom";
import "./Logo.css";

function Logo({ size = "medium", showTagline = false, clickable = true, onClick }) {
  const content = (
    <div className={`brand-logo brand-logo-${size}`}>
      <div className="brand-icon-wrapper">
        <svg
          className="brand-icon-svg"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer elegant diamond shield outline */}
          <rect
            x="4"
            y="4"
            width="32"
            height="32"
            rx="8"
            className="brand-svg-border"
            stroke="url(#goldGradient)"
            strokeWidth="1.75"
          />
          
          {/* Scales of Justice beam and central pillar */}
          <path
            d="M20 9V30"
            stroke="url(#goldGradient)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Pillar base */}
          <path
            d="M14 31H26"
            stroke="url(#goldGradient)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Main top balance beam */}
          <path
            d="M10 14H30"
            stroke="url(#goldGradient)"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
          
          {/* Left balance pan */}
          <path
            d="M10 14L7 21H13L10 14Z"
            stroke="url(#goldGradient)"
            strokeWidth="1.2"
            fill="rgba(198, 161, 91, 0.15)"
            strokeLinejoin="round"
          />
          {/* Left pan strings */}
          <path
            d="M7 21C7 22.5 8.3 23.5 10 23.5C11.7 23.5 13 22.5 13 21"
            stroke="url(#goldGradient)"
            strokeWidth="1.2"
          />

          {/* Right balance pan */}
          <path
            d="M30 14L27 21H33L30 14Z"
            stroke="url(#goldGradient)"
            strokeWidth="1.2"
            fill="rgba(198, 161, 91, 0.15)"
            strokeLinejoin="round"
          />
          {/* Right pan strings */}
          <path
            d="M27 21C27 22.5 28.3 23.5 30 23.5C31.7 23.5 33 22.5 33 21"
            stroke="url(#goldGradient)"
            strokeWidth="1.2"
          />

          {/* Top finial dot */}
          <circle cx="20" cy="8.5" r="1.5" fill="url(#goldGradient)" />

          <defs>
            <linearGradient
              id="goldGradient"
              x1="4"
              y1="4"
              x2="36"
              y2="36"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F5E2B3" />
              <stop offset="0.5" stopColor="#C6A15B" />
              <stop offset="1" stopColor="#9C7733" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="brand-text-wrapper">
        <span className="brand-name">
          Legal<span className="brand-name-accent">Ease</span>
        </span>
        {showTagline && (
          <span className="brand-tagline">Verified Legal Access</span>
        )}
      </div>
    </div>
  );

  if (clickable) {
    return (
      <Link to="/" className="brand-logo-link" onClick={onClick}>
        {content}
      </Link>
    );
  }

  return content;
}

export default Logo;
