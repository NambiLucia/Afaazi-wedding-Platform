import React from "react";
import { useNavigate } from "react-router-dom";
import "./packages.css";
import NavBar from "../NavBar";

function VendorDisplayPage() {
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
            <h3>Mona Makeup Studio</h3>
            <p>
            Mona Faces is a makeup brand that focuses on providing high-quality cosmetics for brides. Their products are designed to be clean, fresh, and youthful, enhancing natural beauty. The brand emphasizes empowering women and offers a variety of products, including foundations and eyeshadow palettes, to ensure a radiant and long-lasting look on special occasions.
            </p>
          </div>

        
          <div className="vendor-items">
            <h3>Packages</h3>
            <ul>
              <li> Basic Bridal - <span className="item-price">UGX 375,000 - 562,500</span></li>
              <li>Deluxe Bridal - <span className="item-price">UGX 562,500 - 750,000</span></li>
              <li>Premium Bridal - <span className="item-price">UGX 750,000 - 937,500</span></li>
              <li>One Set - <span className="item-price">UGX 375,000 - 562,500 per person</span></li>
              
            </ul>
          </div>

        
          <div className="vendor-location">
            <h3>Location</h3>
            <p>Located at: Kisementi, Kampala, Uganda</p>
          </div>

         
          <div className="vendor-testimonials">
            <h3>Client Testimonials</h3>
            <blockquote>
              "I was initially anxious about my wedding day makeup, but Mona Faces put all my worries to rest. The makeup artist was incredibly talented and listened attentively to my vision. I felt absolutely stunning on my big day, and the makeup lasted all night without fading or smudging. Thank you, Mona Faces, for making me feel like a princess!" - <strong> Sarah M.</strong>
            </blockquote>
            <blockquote>
              "I've been a loyal customer of Mona Faces for years, and I've never been disappointed. Highly recommend!" - <strong>Emily K.</strong>
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

export default VendorDisplayPage;