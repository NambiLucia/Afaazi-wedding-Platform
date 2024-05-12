import React from "react";
import { Link } from "react-router-dom";
import "./services.css";

function Services () {
  const servicesData = [
    {
      image: "/images/photography.png",
      title: "Photography & Videography Services",
      description: "Golazo Photography",
    },
    {
      image: "/images/ashton.png",
      title: "Decoration Services",
      description: "iCandy Ug",
    },
    {
      image: "/images/food.png",
      title: "Food & Catering Services",
      description: "Exceed Catering",
    },
    {
      image: "/images/makeup.png",
      title: "Hair & Make-up Services",
      description: "Mona Faces",
    },
    {
      image: "/images/executive.png",
      title: "Car hire Serivices",
      description: "Executive Car hire",
    },
    {
      image: "/images/ivuga.png",
      title: "Music / Entertainment Services",
      description: "Ivuga Band",
    }
   
   
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
