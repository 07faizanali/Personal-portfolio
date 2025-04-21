import React, { useState } from 'react';
import './Project.css';
import { PROJECTS } from '../../utils/data';

const categories = [
  "All",
  "Frontend",
  "Backend",
  "FullStack",
  "NextJS",
  "ReactJS",
  "Python",
  "Blockchain",
  "PowerBI"
];

// ✅ UPDATED: Get category based on technologies mentioned in the `responsibility` array
const getCategory = (responsibilities) => {
  const text = responsibilities.join(' ').toLowerCase();

  if (text.includes('react')) return 'ReactJS';
  if (text.includes('next')) return 'NextJS';
  if (text.includes('python') || text.includes('django')) return 'Python';
  if (text.includes('fullstack') || (text.includes('frontend') && text.includes('backend'))) return 'FullStack';
  if (text.includes('html') || text.includes('css') || text.includes('bootstrap') || text.includes('javascript')) return 'Frontend';
  if (text.includes('java') || text.includes('servlet') || text.includes('jsp') || text.includes('node') || text.includes('express')) return 'Backend';
  if (text.includes('blockchain')) return 'Blockchain';
  if (text.includes('powerbi') || text.includes('data visualization')) return 'PowerBI';

  return 'All';
};

const Project = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  // ✅ Filter projects based on matched category
  const filteredProjects = PROJECTS.filter((project) => {
    const category = getCategory(project.responsibility);
    return activeCategory === 'All' || category === activeCategory;
  });

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className='heading'>My Projects</h2>
        <p>Explore my work by category</p>

        {/* Category buttons */}
        <div className="projectCategories">
          {categories.map((category) => (
            <button
              key={category}
              className={activeCategory === category ? 'active' : ''}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project cards */}
        <div className="projectGrid">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <div className="projectCard" key={index}>
                <h2>{project.title}</h2>
                <h4>{project.date}</h4>
                <ul>
                  {project.responsibility.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='link-btn'
                  >
                    GitHub Link
                  </a>
                )}
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='link-btn2'
                  >
                    Live Demo
                  </a>
                )}
              </div>
            ))
          ) : (
            <p>No projects found for "{activeCategory}"</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Project;
