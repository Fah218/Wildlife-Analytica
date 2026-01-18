import { Link, useLocation } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">🌿</span>
          Wildlife Analytica
        </Link>
        
        <div className="navbar-menu">
          <Link 
            to="/" 
            className={`navbar-link ${location.pathname === "/" ? "active" : ""}`}
          >
            Home
          </Link>
          <Link 
            to="/dashboard" 
            className={`navbar-link ${location.pathname === "/dashboard" ? "active" : ""}`}
          >
            Dashboard
          </Link>
          <Link 
            to="/about" 
            className={`navbar-link ${location.pathname === "/about" ? "active" : ""}`}
          >
            About
          </Link>
        </div>

        <DarkModeToggle />
      </div>
    </nav>
  );
}
