import React, { useState } from 'react'
import './Skills.css'
import { SKILLS } from '../../utils/data'
import SkillCard from './SkillCard/SkillCard'
import SkillsInfoCard from './SkillsInfoCard/SkillsInfoCard'

const Skills = () => {

  const [selectedSkil, setSelectedSkil]= useState(SKILLS[0])

  const handleSelectedSkill =(data)=>{
    setSelectedSkil(data)
  }
  return (

    <section id="about" className='skills-container'>
       <div className="rightColumn">
        <h2>About Me</h2>
        <p>I did my graduation in <span className='spanAbout'><b>Bachelor of Computer Appplication(BCA)</b></span> degree with a commendable <span className='spanAbout'><b>58.4%</b></span> score from Indira Gandhi National Open University, Delhi.
         Currently I am pursuing <span className="spanAbout"><b>Master's in Computer Application(MCA)</b></span>  also from Indira Gandhi National Open University, Delhi. </p>
         <p><span className="spanAbout"><b>Short Term Goal</b></span>: is to get a job in a reputed company in which I can grow my working skill and get more and more knowledge which help in my future bright.</p> 
         <p><span className="spanAbout"><b>Long Term Goal</b></span>: is to beacome a more responsible and knowledgeable personality and achieve a good position in Developer in the organization. I am passionate about leveraging technology to solve complex problems and eager to embark on this journey of professional growth and accomplishment.</p>
        </div>
        
        <h5 id='skills'>Technical Proficiency</h5>
        <div className='skills-content'>
        <div className='skills'> 
        {SKILLS.map((item) =>(
            <SkillCard
            key={item.title}
            iconUrl={item.icon}
            title={item.title}
            isActive={selectedSkil.title === item.title}
            onClick={()=>{
              handleSelectedSkill(item)
            }}
            />

        ))}
        </div>

        <div className='skills-info'>
          <SkillsInfoCard
          heading= {selectedSkil.title} 
          skills={selectedSkil.skills}
          />
        </div>
    </div>
    </section>

  )
}

export default Skills