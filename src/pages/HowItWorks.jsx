import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, BatteryCharging, Car, RadioTower, Sun, Zap } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: <Sun />,
    title: "Solar generation",
    text: "Solar panels provide an energy source for the system when sunlight is available.",
  },
  {
    number: "02",
    icon: <BatteryCharging />,
    title: "Energy storage",
    text: "Generated electricity can be directed to a battery storage system for later use.",
  },
  {
    number: "03",
    icon: <RadioTower />,
    title: "Wireless charging pad",
    text: "The charging area is positioned in the parking space and acts as the wireless power transmitter.",
  },
  {
    number: "04",
    icon: <Car />,
    title: "Vehicle receiver",
    text: "A compatible receiver beneath the vehicle can receive energy from the charging pad.",
  },
];

export default function HowItWorks() {
  return (
    <>
      <PageHero
        eyebrow="HOW IT WORKS"
        title={
          <>
            Energy that moves
            <br />
            <span>without the cable.</span>
          </>
        }
        text="A simple four-stage concept connects solar generation, energy storage, wireless power transfer and the electric vehicle."
      />

      <section className="section section-light">
        <div className="center-heading">
          <span className="eyebrow dark">THE ENERGY PATH</span>
          <h2>
            Four stages.
            <br />
            <span>One system.</span>
          </h2>
        </div>

        <div className="process">
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              <motion.div
                className="process-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
              >
                <span className="process-number">{step.number}</span>
                <div className="process-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </motion.div>

              {index < steps.length - 1 && (
                <div className="process-arrow">
                  <ArrowDown size={22} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      <section className="section dark-section">
        <div className="architecture">
          <div>
            <span className="eyebrow">SYSTEM ARCHITECTURE</span>
            <h2>
              Designed around
              <br />
              <span>energy independence.</span>
            </h2>
            <p className="large-copy">
              The concept separates generation, storage and charging into
              connected modules. This can make future system development and
              deployment easier to explore.
            </p>
          </div>

          <div className="architecture-diagram">
            <div className="diagram-node">
              <Sun size={25} />
              <span>Solar</span>
            </div>

            <div className="diagram-line" />

            <div className="diagram-node">
              <BatteryCharging size={25} />
              <span>Storage</span>
            </div>

            <div className="diagram-line" />

            <div className="diagram-node">
              <Zap size={25} />
              <span>Wireless Pad</span>
            </div>

            <div className="diagram-line" />

            <div className="diagram-node">
              <Car size={25} />
              <span>EV</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="info-grid">
          <InfoCard
            title="Vehicle detection"
            text="A future implementation could detect when a compatible vehicle enters the charging area."
          />
          <InfoCard
            title="Alignment"
            text="Charging can be enabled only when the vehicle is positioned within the intended charging zone."
          />
          <InfoCard
            title="Energy management"
            text="Control electronics could manage energy flow between solar generation, storage and charging."
          />
        </div>
      </section>
    </>
  );
}

function InfoCard({ title, text }) {
  return (
    <div className="info-card">
      <div className="yellow-line" />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function PageHero({ eyebrow, title, text }) {
  return (
    <section className="inner-hero">
      <div className="hero-grid-pattern" />

      <div className="inner-hero-content">
        <span className="eyebrow">
          <span className="live-dot" />
          {eyebrow}
        </span>

        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
}