import React from "react";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";
import { useTheme } from "../contexts/ThemeContext";

const Header = () => {
  const { toggleTheme } = useTheme();

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/" className="nav-link">
          PLACEHOLDER
        </Link>
        <Link to="/" className="nav-link">
          PLACEHOLDER
        </Link>
        <Link to="/contact-us" className="nav-link">
          Contact
        </Link>
      </nav>

      {Auth.loggedIn() ? (
        <Link to="/" className="account" onClick={logout}>
          Logout
        </Link>
      ) : (
        <>
          <Link to="/login" className="account">
            Login
          </Link>
          <Link to="/signup" className="account">
            Signup
          </Link>
        </>
      )}
    </header>
  );
};

export default Header;
