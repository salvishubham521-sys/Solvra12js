import React from "react";
import { motion } from "framer-motion";
import {
  BatteryCharging,
  Cpu,
  RadioTower,
  ScanLine,
  ShieldCheck,
  Sun,
  Zap,
} from "lucide-react";

const technologies = [
  {
    icon: <Sun />,
    title: "Solar integration",
    text: "Solar generation can provide a renewable energy source directly at the charging location.",
  },
  {
    icon: <BatteryCharging />,
    title: "Energy storage",
    text: "Battery storage can help separate energy generation from the exact moment an EV needs charging.",
  },
  {
    icon: <RadioTower />,
    title: "Wireless power",
    text: "A transmitter and compatible vehicle receiver form the basis of the wireless charging concept.",
  },
  {
    icon: <ScanLine />,
    title: "Vehicle alignment",
    text: "Detection and alignment logic can help determine whether the vehicle is correctly positioned.",
  },
  {
    icon: <Cpu />,
    title: "Smart control",
    text: "A control system could coordinate energy flow, charging state and system monitoring.",
  },
  {
    icon: <ShieldCheck />,
    title: "Safety logic",
    text: "Future engineering validation would be required for electrical, thermal, electromagnetic and vehicle safety.",
  },
];

export default function Technology() {
  return (
    <>
      <section className="inner-hero technology-hero">
        <div className="hero-grid-pattern" />

        <div className="inner-hero-content">
          <span className="eyebrow">
            <span className="live-dot" />
            TECHNOLOGY
          </span>

          <h1>
            The technology
            <br />
            <span>behind the idea.</span>
          </h1>

          <p>
            Solvra combines several established engineering concepts into a
            future wireless EV charging architecture.
          </p>
        </div>

        <div className="tech-orbit">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit-center">
            <Zap size={42} fill="currentColor" />
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="section-heading">
          <div>
            <span className="eyebrow dark">CORE TECHNOLOGIES</span>
            <h2>
              Built from
              <br />
              <span>connected systems.</span>
            </h2>
          </div>

          <p>
            The final hardware architecture would depend on detailed
            engineering, vehicle compatibility and testing.
          </p>
        </div>

        <div className="technology-grid">
          {technologies.map((item, index) => (
            <motion.div
              className="technology-card"
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              whileHover={{ y: -6 }}
            >
              <div className="technology-icon">{item.icon}</div>
              <span className="technology-number">
                0{index + 1}
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section dark-section">
        <div className="tech-split">
          <div className="tech-panel">
            <span className="eyebrow">ENGINEERING PRINCIPLE</span>
            <h2>
              Energy flow should be
              <br />
              <span>visible and controllable.</span>
            </h2>
          </div>

          <div className="tech-list">
            <TechPoint title="Generate" text="Capture available solar energy." />
            <TechPoint title="Store" text="Manage energy availability through storage." />
            <TechPoint title="Detect" text="Identify vehicle presence and positioning." />
            <TechPoint title="Transfer" text="Deliver energy through the wireless charging interface." />
            <TechPoint title="Monitor" text="Track the system state through a control interface." />
          </div>
        </div>
      </section>
    </>
  );
}

function TechPoint({ title, text }) {
  return (
    <div className="tech-point">
      <div className="point-icon">
        <Zap size={16} />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}