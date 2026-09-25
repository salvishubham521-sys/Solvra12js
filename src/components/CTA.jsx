import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="cta-section">

      <div className="cta-glow" />

      <div className="cta-content">

        <span className="eyebrow">
          THE NEXT PARKING EXPERIENCE
        </span>

        <h2>
          Let's build a smarter way
          <br />
          to charge.
        </h2>

        <p>
          SOLVRA is an early-stage concept exploring the intersection
          of renewable energy, wireless power and intelligent parking.
        </p>

        <Link to="/contact" className="button primary">
          Become an Early Partner
          <ArrowUpRight size={18} />
        </Link>

      </div>

    </section>
  );
}