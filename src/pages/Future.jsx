import React from "react";
import { motion } from "framer-motion";
import {
  BrainCircuit,
  CarFront,
  Cloud,
  Network,
  Sparkles,
  Sun,
  Zap,
} from "lucide-react";

const futureIdeas = [
  {
    icon: <BrainCircuit />,
    title: "Smarter energy management",
    text: "Future control software could decide how available energy is distributed between storage and charging.",
  },
  {
    icon: <CarFront />,
    title: "Automated charging",
    text: "Vehicle detection and alignment could make the charging experience increasingly automatic.",
  },
  {
    icon: <Network />,
    title: "Multiple charging bays",
    text: "A future site could coordinate several charging points through a central energy management layer.",
  },
  {
    icon: <Cloud />,
    title: "Remote monitoring",
    text: "A connected dashboard could provide visibility into system status and usage.",
  },
  {
    icon: <Sparkles />,
    title: "Smart parking",
    text: "Charging infrastructure could eventually become part of a broader intelligent parking ecosystem.",
  },
  {
    icon: <Sun />,
    title: "Renewable integration",
    text: "Additional renewable generation and storage technologies could be explored as the system evolves.",
  },
];

export default function Future() {
  return (
    <>
      <section className="future-hero">
        <div className="future-sun">
          <Sun size={85} />
        </div>

        <div className="future-content">
          <span className="eyebrow">
            <span className="live-dot" />
            THE FUTURE
          </span>

          <h1>
            Parking spaces
            <br />
            <span>can become energy spaces.</span>
          </h1>

          <p>
            Today, this is a concept. Tomorrow, the same architecture could
            evolve into a smarter energy and mobility platform.
          </p>
        </div>
      </section>

      <section className="section section-light">
        <div className="center-heading">
          <span className="eyebrow dark">ROADMAP</span>
          <h2>
            Where the idea
            <br />
            <span>could go next.</span>
          </h2>
        </div>

        <div className="roadmap">
          <RoadmapItem
            number="01"
            title="Validate"
            text="Build engineering prototypes and test the individual subsystems."
          />

          <RoadmapItem
            number="02"
            title="Pilot"
            text="Test the concept in a controlled parking environment."
          />

          <RoadmapItem
            number="03"
            title="Connect"
            text="Introduce monitoring, control and multi-point energy management."
          />

          <RoadmapItem
            number="04"
            title="Scale"
            text="Explore larger deployments across suitable parking environments."
          />
        </div>
      </section>

      <section className="section dark-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">FUTURE FEATURES</span>
            <h2>
              More than
              <br />
              <span>charging.</span>
            </h2>
          </div>
        </div>

        <div className="future-grid">
          {futureIdeas.map((item, index) => (
            <motion.div
              className="future-card"
              key={item.title}
              whileHover={{ y: -6 }}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
            >
              <div className="future-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section yellow-section">
        <div className="future-final">
          <Zap size={38} fill="currentColor" />
          <h2>
            The goal is simple:
            <br />
            make charging feel
            <br />
            <span>effortless.</span>
          </h2>
        </div>
      </section>
    </>
  );
}

function RoadmapItem({ number, title, text }) {
  return (
    <div className="roadmap-item">
      <span>{number}</span>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}