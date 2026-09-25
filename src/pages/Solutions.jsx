import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Car,
  Home,
  Hotel,
  ParkingSquare,
  Store,
  ArrowUpRight,
} from "lucide-react";

const solutions = [
  {
    icon: <Home />,
    title: "Homes",
    text: "A future option for residential parking spaces where solar generation and EV charging can be combined.",
  },
  {
    icon: <Building2 />,
    title: "Offices",
    text: "Charging infrastructure can become part of workplace parking and energy management.",
  },
  {
    icon: <ParkingSquare />,
    title: "Apartments",
    text: "A shared charging concept for residential communities with designated parking spaces.",
  },
  {
    icon: <Store />,
    title: "Commercial parking",
    text: "Explore charging as part of customer and employee parking environments.",
  },
  {
    icon: <Hotel />,
    title: "Hotels & malls",
    text: "Integrate EV charging into locations where vehicles remain parked for longer periods.",
  },
  {
    icon: <Car />,
    title: "Public facilities",
    text: "A future scalable architecture for selected public parking and mobility locations.",
  },
];

export default function Solutions() {
  return (
    <>
      <section className="inner-hero solutions-hero">
        <div className="hero-grid-pattern" />

        <div className="inner-hero-content">
          <span className="eyebrow">
            <span className="live-dot" />
            SOLUTIONS
          </span>

          <h1>
            One concept.
            <br />
            <span>Many parking spaces.</span>
          </h1>

          <p>
            Solvra explores how solar-powered wireless EV charging could fit
            different types of parking environments.
          </p>
        </div>
      </section>

      <section className="section section-light">
        <div className="solution-grid">
          {solutions.map((item, index) => (
            <motion.div
              className="solution-card"
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              whileHover={{ y: -8 }}
            >
              <div className="solution-top">
                <div className="solution-icon">{item.icon}</div>
                <span>0{index + 1}</span>
              </div>

              <h3>{item.title}</h3>
              <p>{item.text}</p>

              <ArrowUpRight className="solution-arrow" size={21} />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section yellow-section">
        <div className="solution-banner">
          <div>
            <span className="eyebrow dark">DESIGNED FOR FLEXIBILITY</span>
            <h2>
              Start small.
              <br />
              <span>Scale later.</span>
            </h2>
          </div>

          <p>
            A pilot installation could begin with a limited number of parking
            spaces before a wider deployment is considered.
          </p>
        </div>
      </section>

      <section className="section dark-section">
        <div className="center-heading">
          <span className="eyebrow">DEPLOYMENT THINKING</span>
          <h2>
            From one parking bay
            <br />
            <span>to a connected site.</span>
          </h2>
        </div>

        <div className="deployment-steps">
          <div>01 — Site assessment</div>
          <div>02 — Pilot installation</div>
          <div>03 — Testing & validation</div>
          <div>04 — Scaled deployment</div>
        </div>
      </section>
    </>
  );
}