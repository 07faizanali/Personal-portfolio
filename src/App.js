import './App.css';
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import WorkExperience from './components/WorkExperience/WorkExperience.jsx'
import Project from './components/Project/Project.jsx'
import ContactMe from './components/Contact Me/ContactMe.jsx'
import Footer from './components/Footer/Footer.jsx'
import Services from './components/Services/Services.jsx'
import About from './components/About/About.jsx'

function App() {
  return (
    <>
    <div className="App">
      <Navbar/>
      <Hero/>
      <WorkExperience/>
      <About />
      <Services/>
      <Project/>
      <ContactMe/>
    </div>
    <Footer/>
    </>
  );
}

export default App;
