export const stages = [
  {
    number: "01",
    title: "Solar Generation",
    description:
      "Solar panels convert available sunlight into electrical energy.",
    component: "Solar array",
    icon: "sun"
  },
  {
    number: "02",
    title: "Energy Storage",
    description:
      "A battery energy-storage system can store generated electricity for later use.",
    component: "Battery storage",
    icon: "battery"
  },
  {
    number: "03",
    title: "Smart Energy Management",
    description:
      "A controller can coordinate available solar energy, stored energy and charging demand.",
    component: "Energy controller",
    icon: "cpu"
  },
  {
    number: "04",
    title: "Vehicle Detection",
    description:
      "The system can determine whether an EV is positioned correctly before charging.",
    component: "Detection system",
    icon: "scan"
  },
  {
    number: "05",
    title: "Wireless Power Transfer",
    description:
      "A ground transmitter and vehicle receiver conceptually transfer energy without a plug.",
    component: "Wireless transmitter",
    icon: "zap"
  },
  {
    number: "06",
    title: "EV Charging",
    description:
      "The vehicle receives power through its compatible charging receiver.",
    component: "Vehicle receiver",
    icon: "car"
  }
];

export const solutions = [
  {
    title: "Residential",
    description:
      "A dedicated parking space could integrate a wireless charging pad with locally generated solar energy.",
    benefit: "Designed around effortless home charging."
  },
  {
    title: "Workplace",
    description:
      "Office parking could become an opportunity for renewable-energy-supported EV charging.",
    benefit: "A charging experience integrated into the workday."
  },
  {
    title: "Apartments",
    description:
      "Shared parking environments could potentially support managed wireless charging infrastructure.",
    benefit: "Designed for shared parking environments."
  },
  {
    title: "Commercial",
    description:
      "Hotels, malls and restaurants could integrate charging directly into selected parking bays.",
    benefit: "Charging becomes part of the parking experience."
  },
  {
    title: "Public Parking",
    description:
      "Future deployments could connect multiple charging bays into a managed charging network.",
    benefit: "A pathway toward smarter parking infrastructure."
  }
];

export const roadmap = [
  {
    phase: "01",
    title: "Concept Validation",
    description:
      "Validate the system architecture, user experience and core engineering assumptions."
  },
  {
    phase: "02",
    title: "Prototype",
    description:
      "Develop controlled laboratory prototypes and evaluate individual subsystems."
  },
  {
    phase: "03",
    title: "Pilot",
    description:
      "Test the concept in carefully selected real-world parking environments."
  },
  {
    phase: "04",
    title: "Deployment",
    description:
      "Move toward commercially engineered installations after appropriate validation."
  },
  {
    phase: "05",
    title: "Smart Network",
    description:
      "Explore monitoring, analytics, scheduling and multi-bay energy management."
  },
  {
    phase: "06",
    title: "Energy Ecosystem",
    description:
      "Explore integration with broader renewable-energy and smart-city infrastructure."
  }
];