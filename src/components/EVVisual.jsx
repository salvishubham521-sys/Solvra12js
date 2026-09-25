import React from "react";
import { motion } from "framer-motion";
import { Car, Zap } from "lucide-react";

export default function EVVisual({ charging = false }) {
  return (
    <div className={`ev-scene ${charging ? "charging" : ""}`}>

      <div className="ambient-glow" />

      <div className="ev-grid-floor">

        <div className="charging-pad">
          <div className="pad-ring" />
          <div className="pad-center">
            <Zap size={24} />
          </div>
        </div>

        <motion.div
          className="ev-car"
          animate={{
            y: charging ? [0, -3, 0] : 0
          }}
          transition={{
            duration: 2,
            repeat: charging ? Infinity : 0
          }}
        >

          <div className="car-roof" />

          <div className="car-body">
            <Car size={100} strokeWidth={1} />
          </div>

          <div className="receiver">
            <div />
          </div>

        </motion.div>

        {charging && (
          <div className="energy-rays">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        )}

      </div>

      <div className="visual-label">
        <span>
          {charging ? "WIRELESS CHARGING ACTIVE" : "PARK • ALIGN • CHARGE"}
        </span>
      </div>

    </div>
  );
}