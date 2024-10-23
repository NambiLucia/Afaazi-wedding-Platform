import React from "react";
import { useNavigate } from "react-router-dom";
import "./ashton.css";
import NavBar from "../src/components/NavBar"

function KemPage() {
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
            <h3>Kembabazi Catering Centre</h3>
            <p>
            Kembabazi Restaurant offers a unique blend of traditional Ugandan cuisine with international flavors, creating an unforgettable gastronomical experience for your wedding. Our expert chefs meticulously craft each dish to be both visually stunning and incredibly delicious.
            
            </p>
          </div>

        
          <div className="vendor-items">
            <h3>Packages</h3>
            <ul>
              <li> Classic Package - <span className="item-price">UGX 10,000,000 - 15,000,000</span></li>
              <li>Elegant Package - <span className="item-price">UGX 15,000,000 - 20,000,000</span></li>
              <li>Premium Package - <span className="item-price">UGX 20,000,000 - 25,000,000</span></li>
              
              
            </ul>
          </div>

        
          <div className="vendor-location">
            <h3>Location</h3>
            <p>Located at: Naguru,Kampala-Uganda</p>
          </div>

         
          <div className="vendor-testimonials">
            <h3>Client Testimonials</h3>
            <blockquote>
              "The food is amazing.Highly recommend" - <strong> Balunywa M.</strong>
            </blockquote>
            <blockquote>
              "Kembabzi is the place to be" - <strong>Klaire M.</strong>
            </blockquote>
          </div>

          
          <div className="vendor-whatsapp-button">
            <a
              href="https://wa.me/+256773350829" 
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

export default KemPage;