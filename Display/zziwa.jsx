import React from "react";
import { useNavigate } from "react-router-dom";
import "./ashton.css";
import NavBar from "../src/components/NavBar"

function ZziwaPage() {
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
            <h3>Zziwa Hair Studio</h3>
            <p>
            Zziwa Hair Studio merges traditional styling techniques with modern trends to create stylish looks to die for. Our team of highly trained and experienced hairdressers is ready to give you the ultimate salon experience you have been looking for. 
            
            </p>
          </div>

        
          <div className="vendor-items">
            <h3>Packages</h3>
            <ul>
              <li> Classic Package - <span className="item-price">UGX 500,000 - 800,000</span></li>
              <li>Elegant Package - <span className="item-price">UGX 800,000 - 1,200,000</span></li>
              <li>Luxury Package - <span className="item-price">UGX 1,200,000 - 1,500,000</span></li>
              
              
            </ul>
          </div>

        
          <div className="vendor-location">
            <h3>Location</h3>
            <p>Located at: Kisementi, Kampala-Uganda</p>
          </div>

         
          <div className="vendor-testimonials">
            <h3>Client Testimonials</h3>
            <blockquote>
              "Been in Uganda for 10 years now and this is the best place for a cut & styling." - <strong> Reuben R.</strong>
            </blockquote>
            <blockquote>
              "It’s always an enjoyable experience! And they have the best nails technician too" - <strong>Ginny Abimanya</strong>
            </blockquote>
          </div>

          
          <div className="vendor-whatsapp-button">
            <a
              href="https://wa.me/+2560200923956" 
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

export default ZziwaPage;