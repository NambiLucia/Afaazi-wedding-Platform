import React from "react";
import { useNavigate } from "react-router-dom";
import "./strat.css";
import NavBar from "../src/components/NavBar"

function StratPage() {
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
            <h3>Strat Bridal</h3>
            <p>
            With the largest stock of designer wedding dresses in East Africa, you will try on unlimited designer styles to find your dream wedding dress💃🏿.Inspiring families one bride at a time. You get exactly what you see. Our gowns are original and of the highest utmost quality. We represent 25 international bridal designer brands from the US, UK, and Europe because we know you deserve only the best
            
            </p>
          </div>

        
          <div className="vendor-items">
            <h3>Packages</h3>
            <ul>
              <li> Basic Package - <span className="item-price">UGX 1,500,000 - 3,000,000</span></li>
              <li>Deluxe Package - <span className="item-price">UGX 2,500,000 - 4,000,000</span></li>
              <li>Premium Package- <span className="item-price">UGX 3,500,000 - 5,000,000</span></li>
              
              
            </ul>
          </div>

        
          <div className="vendor-location">
            <h3>Location</h3>
            <p>Located at: Bukoto, Uganda</p>
          </div>

         
          <div className="vendor-testimonials">
            <h3>Client Testimonials</h3>
            <blockquote>
              "Strat made getting married during the pandemic a dream. I could never thank them enough for how they treated me, my girls and my mothers during the fittings" - <strong> Miranda K.</strong>
            </blockquote>
            <blockquote>
              "Such great taste and choice of beautiful gowns and accessories! What an experience!♥♥" - <strong>Jackie Nkwenge</strong>
            </blockquote>
          </div>

          
          <div className="vendor-whatsapp-button">
            <a
              href="https://wa.me/+256700113226" 
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

export default StratPage;