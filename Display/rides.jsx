import React from "react";
import { useNavigate } from "react-router-dom";
import "./rides.css";
import NavBar from "../src/components/NavBar"

function RidesPage() {
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
            <h3>Executive Rides Ug</h3>
            <p>
            Your Satisfaction is Our Guarantee!! Experience the class, Elegance & comfort of a kind on your wedding day at the best prices you can trust.
            
            </p>
          </div>

        
          <div className="vendor-items">
            <h3>Packages</h3>
            <ul>
              <li>  Limousine - <span className="item-price">UGX 1,500,000 - 2,500,000 per hour</span></li>
              <li>Convertible Open Roof - <span className="item-price">UGX 1,000,000 - 1,500,000 per hour</span></li>
              <li>Vintage- <span className="item-price">UGX 1,500,000 - 2,000,000 per hour</span></li>
              <li>Range Rovers- <span className="item-price">UGX 1,200,000 - 1,800,000 per hour</span></li>
              
              
            </ul>
          </div>

        
          <div className="vendor-location">
            <h3>Location</h3>
            <p>Located at: Kampala, Uganda</p>
          </div>

         
          <div className="vendor-testimonials">
            <h3>Client Testimonials</h3>
            <blockquote>
              "The best Bridal cars you could have" - <strong> Mathew B.</strong>
            </blockquote>
            <blockquote>
              "The cars are so comfortable" - <strong>Miriam T.</strong>
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

export default RidesPage;