import React from "react";
import { useNavigate } from "react-router-dom";
import "./ashton.css";
import NavBar from "../src/components/NavBar"

function JanziPage() {
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
            <h3>Janzi Band</h3>
            <p>
            Ugandan afro-fusion, contemporary and world music group
            
            </p>
          </div>

        
          <div className="vendor-items">
            <h3>Packages</h3>
            <ul>
              <li> Short Skit - <span className="item-price">UGX 1,000,000 - 2,000,000 - 30-minute performance</span></li>
              <li> Medium Serve - <span className="item-price">UGX 2,500,000 - 3,500,000 - 1-hour performance</span></li>
              <li>Long Stay - <span className="item-price">UGX 5,000,000 - 7,000,000 - 3-hour performance</span></li>
              
              
            </ul>
          </div>

        
          <div className="vendor-location">
            <h3>Location</h3>
            <p>Located at: Kampala, Uganda</p>
          </div>

         
          <div className="vendor-testimonials">
            <h3>Client Testimonials</h3>
            <blockquote>
              "Absolutely great live band music" - <strong> Joshua K.</strong>
            </blockquote>
            <blockquote>
              "Very entertaining. My guests loved them" - <strong>Billy L.</strong>
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

export default JanziPage;