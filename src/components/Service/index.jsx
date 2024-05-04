import React from "react";
import "./service.css"

function Service () {
  return (
    <section id="services" className="service-gallery">
      <div className="services-header">
        <h2>What we offer</h2>
        <b>Features..</b>
      </div>
      <div className="service-card-container">
        <div className="service-card">
          <div className="service-card-content">
            <div>
              <img src="\images\mona.png" alt="mona"/>

            </div>
            <p>Kisementi Kampala</p>
            <h2>Mona Faces</h2>
            
          </div>
        </div>
        <div className="service-card">
          <div className="service-card-content">
            <div>
            <img src="\images\zziwa.png" alt="mona"/>

            </div>
              <p>Kisementi Kampala</p>
            <h2>Hair by Zziwa</h2>
          
          </div>
        </div>
        <div className="service-card">
          <div className="service-card-content">
          <div>
            <img src="\images\kembabzi.png" alt="mona"/>

            </div>
            <p>Naguru Kampala</p>
            <h2>Kembabazi Catering</h2>
            
          </div>
        </div>
      </div>
      <div className="service-card-container">
        <div className="service-card">
          <div className="service-card-content">
            <h2>Title 4....</h2>
            <p>Content 4.....</p>
          </div>
        </div>

        <div className="service-card">
          <div className="service-card-content">
            <h2>Title 5...</h2>
            <p>Content 5...</p>
          </div>
        </div>

        <div className="service-card">
          <div className="service-card-content">
            <h2>Title 6</h2>
            <p>Content 6 ....</p>
          </div>
          
        </div>
      </div>
     

    </section>

  



  )
}

export default Service;