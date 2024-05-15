import React from "react";
import "./vendors.css"

function Vendors () {
  return (
    <section id="vendors" className="vendors-gallery">

      <div className="vendors-header">
       <h2 >TRENDING VENDORS</h2>
      </div>
        
      <div className="vendors-card-container">

        <div className="vendors-card">
          
          <div className="vendors-card-content">
            <div>
              <img src="\images\mona.png" alt="mona"/>

            </div>
            <p>Kisementi Kampala</p>
            <h2>Mona Faces</h2>
            
          </div>
        </div>
        <div className="vendors-card">
          <div className="vendors-card-content">
            <div>
            <img src="\images\zziwa.png" alt="mona"/>

            </div>
              <p>Kisementi Kampala</p>
            <h2>Hair by Zziwa</h2>
          
          </div>
        </div>
        <div className="vendors-card">
          <div className="vendors-card-content">
          <div>
            <img src="\images\kembabzi.png" alt="mona"/>

            </div>
            <p>Naguru Kampala</p>
            <h2>Kembabazi Catering</h2>
            
          </div>
        </div>
      </div>
      <div className="vendors-card-container">
        <div className="vendors-card">
          <div className="vendors-card-content">
          <div>
            <img src="\images\ashton.png" alt="mona"/>

            </div>
            <p>Seeta Mukono</p>
            <h2>Ashton Events</h2>
          </div>
        </div>

        <div className="vendors-card">
          <div className="vendors-card-content">
          <div>
            <img src="\images\executive.png" alt="mona"/>

            </div>
            <p>Kampala</p>
            <h2>Executive Rides Ug</h2>
          </div>
        </div>

        <div className="vendors-card">
          <div className="vendors-card-content">
          <div>
            <img src="\images\strat2x.png" alt="mona"/>

            </div>
            <p>Bukoto Kampala</p>
            <h2>Strat Bridal</h2>
          </div>
          
        </div>
      </div>
     

    </section>

  



  )
}

export default Vendors;