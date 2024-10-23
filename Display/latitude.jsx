import React from "react";
import { useNavigate } from "react-router-dom";
import "./ashton.css";
import NavBar from "../src/components/NavBar"

function LatitudePage() {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate("/login"); 
  };

  return (
    <>
      <NavBar />
      <section id="vendor-page">
        <div className="vendor-content">
       
          <div className="vendor-description">
            <h3>Latitude 0</h3>
            <p>
            Latitude 0° is the third property in The Latitude Group of Hotels portfolio. Social. Stylish.
            
            </p>
          </div>

        
          <div className="vendor-items">
            <h3>Packages</h3>
            <ul>
              <li> Gardens - <span className="item-price">UGX 5,000,000 - 8,000,000 </span></li>
              <li>Food - <span className="item-price">UGX 150,000 - 250,000 (Inclusive of food and drinks)</span></li>
              
              
              
            </ul>
          </div>

        
          <div className="vendor-location">
            <h3>Location</h3>
            <p>Located at: Makindye Hill, Uganda</p>
          </div>

         
          <div className="vendor-testimonials">
            <h3>Client Testimonials</h3>
            <blockquote>
              "This is the place to be" - <strong> Naomi Tesfay.</strong>
            </blockquote>
            <blockquote>
              "My guests were very comfortable" - <strong>Katia K.</strong>
            </blockquote>
          </div>

          
          <div className="vendor-whatsapp-button">
            <a
              href="https://wa.me/+256709440633" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="whatsapp-button"
            >
              Contact Us on WhatsApp
            </a>
          </div>

       
          <div className="vendor-login-button">
            <button onClick={handleLoginRedirect}>Login to Book Vendor</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default LatitudePage;