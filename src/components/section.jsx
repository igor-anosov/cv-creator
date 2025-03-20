import React from "react";

const Section = ({ title, children, className }) => {
  return (
    <section className={`section ${className}`}>
      <h3 className="strong">{title}</h3>
      {children}
    </section>
  );
};

export default Section;
