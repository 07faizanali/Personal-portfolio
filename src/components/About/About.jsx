import React, { useEffect, useState } from 'react';
import './About.css';
import { SKILLS } from '../../utils/data';

const AboutUs = () => {
  const [filledPercentages, setFilledPercentages] = useState({});

  useEffect(() => {
    const timeout = setTimeout(() => {
      const updated = {};
      SKILLS.forEach((category) => {
        category.skills.forEach((item) => {
          if (item.percentage) {
            updated[item.skill] = item.percentage;
          }
        });
      });
      setFilledPercentages(updated);
    }, 500); // delay to trigger animation

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="about-section" id='about'>
      <div className="container">
        <h1 className="section-title">About Me</h1>
        <p className="section-subtitle">A glimpse into who I am and what I do</p>

        <div className="about-content">
          <div className="about-box glass-card">
            <h2>Education</h2>
            <p>
              I completed my Bachelor of Computer Applications (BCA) with a score of 58.4% from
              Indira Gandhi National Open University, Delhi. I am currently pursuing my Master’s
              in Computer Applications (MCA) from the same university.
            </p>
          </div>
          <div className="about-box glass-card">
            <h2>Career Goals</h2>
            <p>
              <strong>Short-Term Goal:</strong> To get a job in a reputed company where I can grow
              my skills and gain valuable knowledge.
            </p>
            <p>
              <strong>Long-Term Goal:</strong> To become a responsible and knowledgeable developer,
              solving real-world problems with technology and achieving excellence in my field.
            </p>
          </div>
        </div>

        <h2 className="skills-title">Skills</h2>
        <div className="skills-grid">
          {SKILLS.map((category, index) => (
            <div className="skill-category glass-card" key={index}>
              <div className="skill-header">
                <img src={category.icon} alt={category.title} className="icon" />
                <h3>{category.title}</h3>
              </div>
              <ul className="skill-list">
                {category.skills.map((item, idx) => (
                  <li key={idx}>
                    <span>{item.skill}</span>
                    {item.percentage && (
                      <div className="progress-bar">
                        <div
                          className="progress-fill"
                          style={{
                            width: filledPercentages[item.skill] || '0%',
                          }}
                        >
                          <span className="percentage-label">{item.percentage}</span>
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
