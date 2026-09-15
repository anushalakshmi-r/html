import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = (section) => {
    setMenuOpen(false);

    if (location.pathname === "/") {
      document
        .getElementById(section)
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${section}`);
    }
  };

  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        <img src={logo} alt="logo" width="150px" height="100px" />
      </Link>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>

        <button onClick={() => goToSection("home")}>
          Home
        </button>

        <button onClick={() => goToSection("about")}>
          About
        </button>

        <button onClick={() => goToSection("services")}>
          Services
        </button>

        <button onClick={() => goToSection("projects")}>
          Projects
        </button>

        <button
  onClick={() => {
    setMenuOpen(false);
    navigate("/contact");
  }}
>
  Contact
</button>

      </div>

      <button
        className="consult-btn"
        onClick={() => goToSection("contact")}
      >
        Free Consultation
      </button>

      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

    </nav>
  );
}

export default Navbar;