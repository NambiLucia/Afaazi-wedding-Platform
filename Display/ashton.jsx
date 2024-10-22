import React from "react";
import { useNavigate } from "react-router-dom";
import "./ashton.css";
import NavBar from "../src/components/NavBar"

function AshtonPage() {
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
            <h3>Ashton Events</h3>
            <p>
            We create Memories that last! Event Planning and Management services We offer Decoration, lighting, Music & Public Address systems and Ushers.<br></br>
            Additional services like catering, photography, transportation, and accommodation can be added to any package.
            
            </p>
          </div>

        
          <div className="vendor-items">
            <h3>Packages</h3>
            <ul>
              <li> Essential Package - <span className="item-price">UGX 5,000,000 - 10,000,000</span></li>
              <li>Classic Package - <span className="item-price">UGX 10,000,000 - 15,000,000</span></li>
              <li>Premium Package - <span className="item-price">UGX 15,000,000 - 20,000,000</span></li>
              
              
            </ul>
          </div>

        
          <div className="vendor-location">
            <h3>Location</h3>
            <p>Located at: Seeta, Mukono, Uganda</p>
          </div>

         
          <div className="vendor-testimonials">
            <h3>Client Testimonials</h3>
            <blockquote>
              "Ashton Events made the planning process so much easier. They took care of everything, from the decorations to the entertainment. Our guests had a wonderful time, and we couldn't be happier with the outcome" - <strong> Josine K.</strong>
            </blockquote>
            <blockquote>
              "We were so impressed with Ashton Events' attention to detail. Our venue looked stunning, the music was perfect." - <strong>Keilla.</strong>
            </blockquote>
          </div>

          
          <div className="vendor-whatsapp-button">
            <a
              href="https://wa.me/+256775899153" 
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

export default AshtonPage;