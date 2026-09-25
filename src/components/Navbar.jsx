import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, Zap, ArrowUpRight } from "lucide-react";

const links = [
  ["Technology", "/technology"],
  ["How It Works", "/how-it-works"],
  ["Solutions", "/solutions"],
  ["Future", "/future"],
  ["About", "/about"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="nav-inner">
        <Link to="/" className="brand" onClick={closeMenu}>
          <span className="brand-icon">
            <Zap size={19} fill="currentColor" />
          </span>

          <span>
            SOLVRA
            <small>ENERGY SYSTEMS</small>
          </span>
        </Link>

        <nav className={`nav-links ${open ? "nav-open" : ""}`}>
          {links.map(([name, path]) => (
            <NavLink
              key={path}
              to={path}
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {name}
            </NavLink>
          ))}

          <Link to="/dashboard" className="nav-app" onClick={closeMenu}>
            Open App
            <ArrowUpRight size={16} />
          </Link>

          <Link to="/contact" className="nav-contact" onClick={closeMenu}>
            Contact
          </Link>
        </nav>

        <button
          className="menu-button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>
    </header>
  );
}