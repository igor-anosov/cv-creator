import React from "react";

const TitledList = ({ title, location, period, children }) => {
  return (
    <div className="job">
      <h4>{title}</h4>
      <p>
        {location} | {period}
      </p>
      {Array.isArray(children) ? (
        <ul>
          {children.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : children}
    </div>
  );
};

export default TitledList;
