import React from "react";
import "./WorkExperience.css";
import { WORK_EXPERIENCE } from "../../utils/data";

const WorkExperience = () => {
  return (
    <section className="experience-modern" id="experience">
      <h2 className="experience-heading"> Work Experience</h2>
      <div className="experience-grid">
        {WORK_EXPERIENCE.map((item, index) => (
          <div className="experience-card" key={index}>
            <div className="exp-header">
              
              <div>
                <h3>{item.title} @ {item.company}</h3>
                <span className="exp-date">{item.date}</span>
              </div>
            </div>
            <div className="exp-description">
              <ul>
                {item.responsibilities.map((res, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: res }} />
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
