import React from 'react';
import  './Services.css';

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Services</h2>
        <p>Lorem ipsum dolor sit amet, Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convall's pretium.</p>
        <div className="serviceCards">
          <div className="card">
            <img src='assets/images/Vector5.png' alt='vector'/>
            <h3>UI/UX</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="card">
          <img src='assets/images/Vector2.png' alt='vector'/>
            <h3>Web Design</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="card">
          <img src='assets/images/Vector.png' alt='vector'/>
            <h3>App Design</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="card">
          <img src='assets/images/Vector1.png' alt='vector'/>
            <h3>Graphic Design</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
