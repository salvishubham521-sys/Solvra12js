import React from "react";
import { motion } from "framer-motion";
import {
  Sun,
  Battery,
  Cpu,
  Zap,
  Car
} from "lucide-react";

const nodes = [
  { label: "Solar", icon: Sun },
  { label: "Battery", icon: Battery },
  { label: "Controller", icon: Cpu },
  { label: "Wireless Pad", icon: Zap },
  { label: "EV", icon: Car }
];

export default function EnergyFlow() {
  return (
    <div className="energy-flow">

      {nodes.map((node, index) => {

        const Icon = node.icon;

        return (
          <div className="energy-step" key={node.label}>

            <div className="energy-node">

              <Icon size={24} />

              <span>{node.label}</span>

            </div>

            {index !== nodes.length - 1 && (
              <div className="energy-line">
                <motion.div
                  className="energy-particle"
                  animate={{ x: ["0%", "100%"] }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "linear",
                    delay: index * 0.25
                  }}
                />
              </div>
            )}

          </div>
        );
      })}

    </div>
  );
}