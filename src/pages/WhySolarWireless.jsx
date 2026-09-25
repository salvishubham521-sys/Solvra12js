import React from "react";
import {
  Sun,
  Cable,
  Battery,
  Network,
  Leaf,
  SlidersHorizontal
} from "lucide-react";

import PageHero from "../components/PageHero";
import SectionHeader from "../components/SectionHeader";
import CTA from "../components/CTA";

const benefits = [
  {
    icon: Sun,
    title: "Renewable Energy Integration",
    text:
      "Solar generation can be integrated into the charging architecture where site conditions make it practical."
  },
  {
    icon: Battery,
    title: "Energy Storage",
    text:
      "Battery storage can help separate the timing of solar generation from charging demand."
  },
  {
    icon: Cable,
    title: "Cable-Free Experience",
    text:
      "Wireless charging can reduce the need for a user to manually connect a charging cable."
  },
  {
    icon: SlidersHorizontal,
    title: "Smart Management",
    text:
      "A controller could coordinate energy availability, vehicle detection and charging decisions."
  },
  {
    icon: Network,
    title: "Parking Integration",
    text:
      "The charging hardware can be conceptually integrated directly into designated parking spaces."
  },
  {
    icon: Leaf,
    title: "Sustainability Potential",
    text:
      "The combination creates an opportunity to connect renewable energy and electric mobility."
  }
];

export default function WhySolarWireless() {
  return (
    <>
      <PageHero
        eyebrow="WHY SOLAR + WIRELESS"
        title="Two ideas that become more interesting together."
        description="Solar energy addresses generation. Wireless charging addresses the user experience. Energy storage and smart control connect the two."
      />

      <section className="section">

        <SectionHeader
          eyebrow="THE COMBINATION"
          title="Generation + storage + wireless transfer."
          description="The value of the concept comes from connecting these technologies into one parking-oriented system."
          centered
        />

        <div className="comparison">

          <div className="comparison-card">
            <Sun />
            <span>SOLAR</span>
            <h3>Generate</h3>
            <p>
              Generate electricity from available sunlight.
            </p>
          </div>

          <div className="comparison-symbol">+</div>

          <div className="comparison-card">
            <Battery />
            <span>BATTERY</span>
            <h3>Store</h3>
            <p>
              Store energy for use when appropriate.
            </p>
          </div>

          <div className="comparison-symbol">+</div>

          <div className="comparison-card">
            <Cable />
            <span>WIRELESS</span>
            <h3>Transfer</h3>
            <p>
              Explore a cable-free vehicle charging experience.
            </p>
          </div>

        </div>

      </section>

      <section className="section">

        <SectionHeader
          eyebrow="POTENTIAL BENEFITS"
          title="Designed around possibilities, not promises."
        />

        <div className="technology-grid">

          {benefits.map((benefit) => {

            const Icon = benefit.icon;

            return (
              <article className="tech-card" key={benefit.title}>

                <div className="tech-icon">
                  <Icon />
                </div>

                <h3>{benefit.title}</h3>

                <p>{benefit.text}</p>

              </article>
            );
          })}

        </div>

      </section>

      <section className="section">

        <div className="disclaimer">

          <strong>Important</strong>

          <p>
            Actual energy savings, emissions impact, charging speed,
            efficiency, operating cost and grid dependence depend on
            the final engineering design, site conditions, energy mix,
            vehicle compatibility and operating strategy. No specific
            performance claim is made by this concept website.
          </p>

        </div>

      </section>

      <CTA />
    </>
  );
}