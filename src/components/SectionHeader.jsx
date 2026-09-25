import React from "react";
export default function SectionHeader({
  eyebrow,
  title,
  description,
  centered = false
}) {
  return (
    <div className={`section-header ${centered ? "centered" : ""}`}>

      {eyebrow && (
        <span className="eyebrow">
          {eyebrow}
        </span>
      )}

      <h2>{title}</h2>

      {description && (
        <p>{description}</p>
      )}

    </div>
  );
}