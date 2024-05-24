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
             <h1>BASIC</h1>
            <p>
              <h3> UGX 2,000,000</h3> <br />

                Event planning and coordination
                Venue selection and booking
                decoration
                On-site event management
  
            </p>
           
            
          </div>
        </div>
        <div className="packages-card">
          <div className="packages-card-content">
              <h1>STANDARD</h1> 
              <p>
              <h3>UGX 4,200,000</h3> <br />
                Everything in the Basic Package, plus:
                Catering services for up to 50 guests
                Sound system and DJ services
                Photography and videography coverage

               
              </p>
                        
          
          </div>
        </div>
        <div className="packages-card">
          <div className="packages-card-content">

            <h1>PREMIUM</h1>
            <p>
            <h3>UGX 6,000,000</h3> <br />

                  Everything in the Standard Package, plus:
                  Customized event branding and design
                  VIP seating arrangement
                  Guest accommodation arrangements
                  After-event cleaning services

                  
              </p>
        
            
          </div>
        </div>
      </div>
      

    </section>

  );
}

export default Packages;

