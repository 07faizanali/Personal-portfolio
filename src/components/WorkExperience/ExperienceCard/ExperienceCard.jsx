import React from 'react';
import './ExperienceCard.css';

const ExperienceCard = ({ details }) => {
  return (
    <div className="exp-card">
      <h3 className="exp-title">{details.title}</h3>
      <p className="exp-date">{details.date}</p>
      <ul className="exp-tasks">
        {details.responsibilities.map((item) => (
          <li key={item} dangerouslySetInnerHTML={{ __html: item }} />
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
