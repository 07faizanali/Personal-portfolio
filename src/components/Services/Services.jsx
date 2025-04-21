import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: 'assets/images/Vector5.png',
      title: 'UI/UX',
      desc: 'Creating seamless, user-friendly interfaces and user experiences.',
    },
    {
      icon: 'assets/images/Vector2.png',
      title: 'Web Design',
      desc: 'Designing responsive and modern websites for all devices.',
    },
    {
      icon: 'assets/images/Vector.png',
      title: 'App Design',
      desc: 'Crafting visually appealing and intuitive mobile app designs.',
    },
    {
      icon: 'assets/images/Vector1.png',
      title: 'Graphic Design',
      desc: 'Delivering unique and creative visual branding solutions.',
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="services-title">Services</h2>
        <p className="services-desc">
          I provide a range of design and development services to bring your ideas to life with style and functionality.
        </p>
        <div className="serviceCards">
          {services.map((service, index) => (
            <div className="card" key={index}>
              <img src={service.icon} alt={service.title} />
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
