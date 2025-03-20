import React from "react";

const Job = ({ title, location, period, description, achievements, technologies }) => {
  return (
    <div className="job">
      <h4>{title}</h4>
      <p>
        {location} | {period}
      </p>
      {description && (
        <div className="description">
          <h6 className="strong">About Project:</h6>
          <p>{description}</p>
        </div>
      )}
      {achievements && (
        <div className="achivements">
          <h6 className="strong">Achievements:</h6>
          <ul>
            {achievements.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
      {technologies && (
        <div className="technologies">
          <h6>Technologies: </h6>
          <div>
            {technologies.map((tech, index) => (
              <span key={index} className="tech-badge">
                {tech}{index < technologies.length - 1 ? ',' : ''}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Job;
