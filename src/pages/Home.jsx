import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BatteryCharging,
  Car,
  ChevronRight,
  CircleCheck,
  RadioTower,
  Sun,
  Zap,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-glow glow-one" />
        <div className="hero-glow glow-two" />

        <div className="hero-content">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="hero-copy"
          >
            <span className="eyebrow">
              <span className="live-dot" />
              SOLAR × WIRELESS EV CHARGING
            </span>

            <h1>
              The sun
              <br />
              <span>charges</span>
              <br />
              your journey.
            </h1>

            <p>
              A future-facing concept for parking spaces where solar energy,
              storage and wireless EV charging work together.
            </p>

            <div className="hero-buttons">
              <Link to="/how-it-works" className="button button-yellow">
                Explore the system
                <ArrowRight size={18} />
              </Link>

              <Link to="/dashboard" className="button button-outline">
                Open charging app
                <ArrowUpRight size={17} />
              </Link>
            </div>

            <div className="hero-note">
              <CircleCheck size={17} />
              Independent energy pathway concept
            </div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
          >
            <div className="solar-orb">
              <Sun size={65} />
            </div>

            <div className="energy-ray ray-one" />
            <div className="energy-ray ray-two" />
            <div className="energy-ray ray-three" />

            <div className="ev-platform">
              <div className="charging-ring">
                <Zap size={30} fill="currentColor" />
              </div>
            </div>

            <div className="car-visual">
              <div className="car-window" />
              <div className="car-body" />
              <div className="wheel wheel-left" />
              <div className="wheel wheel-right" />
            </div>

            <div className="floating-card solar-card">
              <Sun size={20} />
              <div>
                <strong>Solar Energy</strong>
                <small>Energy source</small>
              </div>
            </div>

            <div className="floating-card charge-card">
              <BatteryCharging size={21} />
              <div>
                <strong>Wireless</strong>
                <small>Charging concept</small>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="hero-scroll">
          <span>SCROLL TO EXPLORE</span>
          <ChevronRight size={17} />
        </div>
      </section>

      <section className="section section-light">
        <div className="section-heading">
          <div>
            <span className="eyebrow dark">ONE ENERGY FLOW</span>
            <h2>
              From sunlight
              <br />
              to <span>motion.</span>
            </h2>
          </div>

          <p>
            The concept connects four important stages into one simple
            energy pathway.
          </p>
        </div>

        <div className="flow-grid">
          <FlowCard
            number="01"
            icon={<Sun />}
            title="Solar generation"
            text="Solar panels convert available sunlight into electrical energy."
          />

          <FlowCard
            number="02"
            icon={<BatteryCharging />}
            title="Energy storage"
            text="A battery system can store generated energy for later use."
          />

          <FlowCard
            number="03"
            icon={<RadioTower />}
            title="Wireless transfer"
            text="A charging pad concept transfers energy to a compatible vehicle receiver."
          />

          <FlowCard
            number="04"
            icon={<Car />}
            title="Your EV"
            text="The vehicle receives charging energy while parked over the charging zone."
          />
        </div>
      </section>

      <section className="section dark-section">
        <div className="split-section">
          <div>
            <span className="eyebrow">WHY THIS CONCEPT</span>
            <h2>
              Charging should fit
              <br />
              <span>into the parking space.</span>
            </h2>

            <p className="large-copy">
              Instead of treating charging as a separate activity, Solvra
              explores how the parking environment itself could become part of
              the energy system.
            </p>

            <Link to="/solutions" className="text-link">
              Explore solutions <ArrowRight size={17} />
            </Link>
          </div>

          <div className="feature-stack">
            <Feature
              title="Solar-first"
              text="Explore renewable energy generation directly at the charging location."
            />
            <Feature
              title="Wireless"
              text="Reduce the need for manually connecting a charging cable in the concept."
            />
            <Feature
              title="Parking-aware"
              text="Vehicle detection and alignment can become part of the charging workflow."
            />
          </div>
        </div>
      </section>

      <section className="section yellow-section">
        <div className="dashboard-promo">
          <div>
            <span className="eyebrow dark">INTERACTIVE DEMO</span>
            <h2>
              See the charging
              <br />
              concept <span>in action.</span>
            </h2>

            <p>
              Open the interactive dashboard to simulate solar availability,
              battery storage and EV charging.
            </p>

            <Link to="/dashboard" className="button button-black">
              Launch dashboard
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="mini-dashboard">
            <div className="mini-top">
              <span>CHARGING DEMO</span>
              <span className="status-pill">
                <span className="live-dot" />
                SIMULATION
              </span>
            </div>

            <div className="mini-battery">
              <div className="battery-icon">
                <BatteryCharging size={25} />
              </div>
              <div>
                <small>Vehicle battery</small>
                <strong>68%</strong>
              </div>
            </div>

            <div className="mini-progress">
              <span style={{ width: "68%" }} />
            </div>

            <div className="mini-stats">
              <div>
                <small>Solar input</small>
                <strong>2.4 kW</strong>
              </div>
              <div>
                <small>Charge mode</small>
                <strong>Wireless</strong>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function FlowCard({ number, icon, title, text }) {
  return (
    <motion.div
      className="flow-card"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.2 }}
    >
      <div className="card-number">{number}</div>
      <div className="flow-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
      <ArrowUpRight className="card-arrow" size={20} />
    </motion.div>
  );
}

function Feature({ title, text }) {
  return (
    <div className="feature-row">
      <div className="feature-check">
        <CircleCheck size={20} />
      </div>

      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}