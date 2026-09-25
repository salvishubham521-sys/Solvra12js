import React from "react";
import { motion } from "framer-motion";

export default function PageHero({
  eyebrow,
  title,
  description
}) {
  return (
    <section className="page-hero">

      <div className="page-hero-grid" />

      <motion.div
        className="page-hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >

        <span className="eyebrow">{eyebrow}</span>

        <h1>{title}</h1>

        <p>{description}</p>

      </motion.div>

    </section>
  );
}