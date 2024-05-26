import React from "react";
import { Link } from "react-router-dom";
import "./services.css";
import NavBar from "../NavBar";

function Services() {
  const servicesData = [
    {
      image: "/images/photography.png",
      title: "Photography ",
      description: "Golazo Photography",
    },
    {
      image: "/images/ashton.png",
      title: "Decoration ",
      description: "iCandy Ug",
    },
    {
      image: "/images/food.png",
      title: "Catering ",
      description: "Exceed Catering",
    },
    {
      image: "/images/makeup.png",
      title: "Make-Up ",
      description: "Mona Faces",
    },
    {
      image: "/images/janzi.png",
      title: "Band Musi",
      description: "Hire A Band",
    },
    {
      image: "/images/icandyUg.png",
      title: "The Ambiance ",
      description: "Suitable Place",
    },
    {
      image: "/images/executive.png",
      title: "Car hire Services",
      description: "Executive Car hire",
    },
    {
      image: "/images/ivuga.png",
      title: "Entertainment ",
      description: "Ivuga Band",
    },
  ];

  return (
    <div className="services-container">
      <NavBar />
      <div className="content">
        <h1 className="title">Explore our Services!</h1>
        <div className="card-container">
          {servicesData.map((service, index) => (
            <div className="card" key={index}>
              <img
                src={service.image}
                alt={`Event ${index + 1}`}
                className="card-image"
              />
              <div className="card-text">
                <h2 className="service-title">{service.title}</h2>
                <p className="service-description">{service.description}</p>
                <Link to="/gallery" className="view-more-button">
                  View more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
