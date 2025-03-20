import React from "react";
import Section from "./section";

const Skills = ({ title, data, withBadge = false, className = "" }) => {
  const withBadgeClass = withBadge ? "with-badge" : "";
  return (
    <Section title={title} >
      <ul className={`skills ${withBadgeClass} ${className}`}>
        {data.map((skill, index) => {
          return withBadge ?
            <span key={index} className="badge">{skill}</span>
            : <li key={index}>{skill}</li>;
        })}
      </ul>
    </Section>
  )
};
export default Skills;