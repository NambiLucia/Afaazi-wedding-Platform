import React from "react";
import { Link } from "react-router-dom";
import "./services.css";

function Services () {
  const servicesData = [
    {
      image: "/images/brides.png",
      title: "Wedding Planning Services",
      description: "Description",
    },
    {
      image: "/images/ashton.png",
      title: "Corporate Event Services",
      description: "Description",
    },
    {
      image: "/images/baraka.png",
      title: "Birthday Party Services",
      description: "Description",
    },
    {
      image: "/images/brides.png",
      title: "Concert & Music Event ",
      description: "Description",
    },
    {
      image: "/images/baraka.png",
      title: "Exhibition and Trade Show",
      description: "Description",
    },
    {
      image: "/images/brides.png",
      title: "Festival and Cultural Event ",
      description: "Description",
    },
   
   
  ];

  return (
    <div className="services-container">
      <h1 className="title">Afaazi Services</h1>
      <p className="subtitle">Explore our Services!</p>
      <div className="card-container">
        {servicesData.map((service, index) => (
          <div className="card" key={index}>
            <img
              src={service.image}
              alt={`Event ${index + 1}`}
              className="card-image"
            />
            <div className="card-text">
              <p className="service-title">{service.title}</p>
              <p className="service-description">{service.description}</p>
              <Link to="/gallery" className="registration-button">
                View more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
