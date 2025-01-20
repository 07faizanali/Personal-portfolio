import './App.css';
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import WorkExperience from './components/WorkExperience/WorkExperience.jsx'
import Skills from './components/Skills/Skills.jsx'
import Project from './components/Project/Project.jsx'
import ContactMe from './components/Contact Me/ContactMe.jsx'
import Footer from './components/Footer/Footer.jsx'
import Services from './components/Services/Services.jsx'
function App() {
  return (
    <>
    <div className="App">
      <Navbar/>
      <Hero/>
      <WorkExperience/>
      <Skills/>
      <Project/>
      <Services/>
      <ContactMe/>
    </div>
    <Footer/>
    </>
  );
}

export default App;
