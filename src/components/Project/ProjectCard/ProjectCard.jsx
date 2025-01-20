import React from 'react'
import './ProjectCard.css'

const ProjectCard = ({details}) => {
  return (
    <div className='work-project-card'>
    <h5>{details.title}</h5>

    <div className='project-duration'>{details.date}</div>
    <ul>
        {details.responsibility.map((item)=>(
            <li key={item}>{item}</li>
        ))}
    </ul>
    {details.githubLink && (
        <div>
          <h6>Check Code Click On:  
          <a href={details.githubLink} target="_blank" rel="noopener noreferrer"> SOURCE CODE</a></h6>
        </div>
      )}
</div> 
  )
}

export default ProjectCard