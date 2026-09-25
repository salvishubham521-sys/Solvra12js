import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Instagram,
  Linkedin,
  Mail,
  Zap,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link to="/" className="brand">
            <span className="brand-icon">
              <Zap size={19} fill="currentColor" />
            </span>

            <span>
              SOLVRA
              <small>ENERGY SYSTEMS</small>
            </span>
          </Link>

          <p>
            Reimagining how solar energy and wireless EV charging can work
            together.
          </p>

          <div className="socials">
            <a href="#!" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="#!" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="mailto:hello@solvra.example" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4>Explore</h4>
          <Link to="/technology">Technology</Link>
          <Link to="/how-it-works">How It Works</Link>
          <Link to="/solutions">Solutions</Link>
          <Link to="/future">Future</Link>
        </div>

        <div>
          <h4>Company</h4>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/dashboard">App Dashboard</Link>
        </div>

        <div className="footer-cta">
          <span className="eyebrow">READY FOR THE NEXT CHARGE?</span>
          <h3>Let's build smarter charging spaces.</h3>

          <Link to="/contact" className="button button-yellow">
            Start a conversation
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 SOLVRA Energy Systems — Concept Project</span>
        <span>Built around solar • storage • wireless charging</span>
      </div>

      <div className="disclaimer">
        Concept website. Actual charging performance, compatibility, safety,
        efficiency, installation requirements and specifications require
        engineering validation and testing.
      </div>
    </footer>
  );
}