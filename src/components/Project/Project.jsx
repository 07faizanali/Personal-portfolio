// import React, {useRef} from 'react'
// import './Project.css'
// import { PROJECTS } from '../../utils/data';
// import ProjectCard from './ProjectCard/ProjectCard'
// import Slider from 'react-slick'

// const Project = () => {
      
//   const sliderRef = useRef();

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     arrows: false,
//     responsive: [
//      {
//       breakpoint: 769,
//       settings: {
//       slidesToShow: 1,
//       slidesToScroll: 1,
//      } 
//     }
//     ] 
//   }

//   const slideRight = () => {
//     sliderRef?.current?.slickNext();
//   }

//   const slideLeft = () => {
//     sliderRef?.current?.slickPrev();
//   }
//   return (

//     <section id="project" className='project-container'>
//         <h5 id='projects'>Projects</h5>
//         <div className='project-content'>
//           <div className='arrow-right' onClick={slideRight}>
//             <span class='material-symbols-outlined'>chevron_right</span>
//           </div> 

//            <div className='arrow-left' onClick={slideLeft}>
//             <span class="material-symbols-outlined">chevron_left</span>
//           </div>

//           <Slider ref={sliderRef} {...settings}>
//             {PROJECTS.map((item)=>(
//               <ProjectCard key={item.title} details={item} />
//           ))}
//           </Slider>
//         </div>
//     </section>
//   )
// }

// export default Project



import React from 'react';
import  './Project.css';

const Project = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>My Projects</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="projectCategories">
          <button>All</button>
          <button>UI/UX</button>
          <button className="active">Web Design</button>
          <button>App Design</button>
          <button>Graphic Design</button>
        </div>
        <div className="projectGrid">
          <div className="projectCard">
          
          <img src="assets/images/Web Designs2.png" alt="Project 3" className="background" />
          <div className="forground"><img src="assets/images/Web Designs1.png" alt="Project 3" /></div>
            <h2>Web design</h2>
            <h3>AirCalling Landing Page Design</h3>
          </div>
          <div className="projectCard">
            
          <img src="assets/images/Web Designs4.png" alt="Project 3" className="background" />
          <div className="forground1"><img src="assets/images/Web Designs3.png" alt="Project 3" /></div>
          <h2>Web design</h2>
            <h3>Business Landing Page Design</h3>
          </div>
          <div className="projectCard">
            
          <img src="assets/images/Web Designs6.png" alt="Project 3" className="background" />
          <div className="forground2"><img src="assets/images/Web Designs5.png" alt="Project 3" /></div>
          <h2>Web design</h2>
            <h3>Ecom Web Page Design</h3>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Project;
