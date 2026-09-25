import React from "react";
import { motion } from "framer-motion";
import {
  Compass,
  Leaf,
  Lightbulb,
  ShieldCheck,
  Target,
  Zap,
} from "lucide-react";

const values = [
  {
    icon: <Lightbulb />,
    title: "Think differently",
    text: "Challenge the assumption that EV charging always needs to be treated as a separate infrastructure problem.",
  },
  {
    icon: <Leaf />,
    title: "Use energy intelligently",
    text: "Explore renewable generation and storage as part of the charging environment.",
  },
  {
    icon: <ShieldCheck />,
    title: "Engineer responsibly",
    text: "Real-world safety, compatibility and performance must be validated before deployment.",
  },
  {
    icon: <Compass />,
    title: "Design for the future",
    text: "Build the concept so that future software and hardware improvements can be explored.",
  },
];

export default function About() {
  return (
    <>
      <section className="inner-hero about-hero">
        <div className="hero-grid-pattern" />

        <div className="inner-hero-content">
          <span className="eyebrow">
            <span className="live-dot" />
            ABOUT SOLVRA
          </span>

          <h1>
            A different way
            <br />
            <span>to think about charging.</span>
          </h1>

          <p>
            Solvra is an early-stage concept exploring the combination of
            solar energy, storage and wireless EV charging.
          </p>
        </div>
      </section>

      <section className="section section-light">
        <div className="about-split">
          <div>
            <span className="eyebrow dark">THE VISION</span>
            <h2>
              Turn the parking space
              <br />
              into part of the
              <br />
              <span>energy system.</span>
            </h2>
          </div>

          <div>
            <p className="large-light-copy">
              The idea behind Solvra is simple: EV charging infrastructure
              should become more integrated with the places where vehicles
              already spend time.
            </p>

            <p>
              By combining solar generation, energy storage and wireless
              charging into one conceptual architecture, we can explore a
              cleaner and more convenient charging experience.
            </p>
          </div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="center-heading">
          <span className="eyebrow">OUR PRINCIPLES</span>
          <h2>
            What guides
            <br />
            <span>the concept.</span>
          </h2>
        </div>

        <div className="values-grid">
          {values.map((item, index) => (
            <motion.div
              className="value-card"
              key={item.title}
              whileHover={{ y: -7 }}
            >
              <div className="value-icon">{item.icon}</div>
              <span>0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section yellow-section">
        <div className="about-statement">
          <Target size={38} />
          <span className="eyebrow dark">OUR APPROACH</span>
          <h2>
            Start with a problem.
            <br />
            Validate the engineering.
            <br />
            <span>Then scale.</span>
          </h2>
        </div>
      </section>

      <section className="section section-light">
        <div className="disclaimer-box">
          <Zap size={24} />
          <div>
            <h3>Important project note</h3>
            <p>
              Solvra is currently presented as an early-stage technology
              concept. This website does not claim that the proposed system
              has been commercially deployed. Actual charging performance,
              compatibility, efficiency, safety, installation requirements,
              certifications and specifications would require engineering
              validation and testing.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}