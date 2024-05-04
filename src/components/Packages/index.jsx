import React from "react";
import "./packages.css";

function Packages() {
  return (
    <section id="packages" >
      <div className="packages-header">
        <h2>PACKAGES</h2>
      </div>
      <div className="packages-card-container">
        <div className="packages-card">
          <div className="packages-card-content">
             <h2>BASIC</h2>
            <p>
                Event planning and coordination
                Venue selection and booking
                decoration
                On-site event management

                UGX 500,000
            </p>
           
            
          </div>
        </div>
        <div className="packages-card">
          <div className="packages-card-content">
              <h2>STANDARD</h2>
              <p>
                Everything in the Basic Package, plus:
                Catering services for up to 50 guests
                Sound system and DJ services
                Photography and videography coverage

                UGX 1,200,000
              </p>
                        
          
          </div>
        </div>
        <div className="packages-card">
          <div className="packages-card-content">

            <h2>PREMIUM</h2>
            <p>
                  Everything in the Standard Package, plus:
                  Customized event branding and design
                  VIP seating arrangement
                  Guest accommodation arrangements
                  After-event cleaning services

                  UGX 2,500,000
              </p>
        
            
          </div>
        </div>
      </div>
      

    </section>

  );
}

export default Packages;

