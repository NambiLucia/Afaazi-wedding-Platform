
import React from "react";
import "./vendors.css";
import NavBar from "../NavBar";


function Vendors() {
  return (
    <>
    <NavBar />
    
    <section className="vendors-gallery">
      
      <div className="vendors-header">
        <h2>TRENDING VENDORS</h2>
      </div>

      <div className="vendors-card-container">
        
        <div className="vendors-card">
          <a href="/vendordisplay" className="vendors-card-link">
            <div className="vendors-card-content">
              <img src="\images\mona.png" alt="Mona" />
              <h2>Mona Faces</h2>
              <p>Kisementi Kampala </p> <p><strong>View Packages</strong></p>
            </div>
          </a>
        </div>

        <div className="vendors-card">
          <a href="/ashtonpage" className="vendors-card-link">
            <div className="vendors-card-content">
              <img src="\images\ashton.png" alt="Ashton" />
              <h2>Ashton Events</h2>
              <p>Seeta Mukono </p> <p><strong>View Packages</strong></p>
            </div>
          </a>
        </div>

        <div className="vendors-card">
          <a href="/zziwapage" className="vendors-card-link">
            <div className="vendors-card-content">
              <img src="\images\zziwa.png" alt="Zziwa" />
              <h2>Hair By Zziwa </h2>
              <p>Kisementi Kampala  </p> <p><strong>View Packages</strong></p>
            </div>
          </a>
        </div>

        <div className="vendors-card">
          <a href="/kempage" className="vendors-card-link">
            <div className="vendors-card-content">
              <img src="\images\kembabzi.png" alt="Kembabazi" />
              <h2>Kembabazi Catering</h2>
              <p>Naguru Kampala  </p> <p><strong>View Packages</strong></p>
            </div>
          </a>
        </div>
      </div>

      <div className="vendors-card-container">
        <div className="vendors-card">
          <a href="/janzipage" className="vendors-card-link">
            <div className="vendors-card-content">
              <img src="\images\janzi.png" alt="Janzi Band" />
              <h2>Janzi Band</h2>
              <p>Kampala  </p> <p><strong>View Packages</strong></p>
            </div>
          </a>
        </div>

        <div className="vendors-card">
          <a href="/#packages" className="vendors-card-link">
            <div className="vendors-card-content">
              <img src="\images\latitude.png" alt="Latitude 0 Degrees" />
              <h2>Latitude 0 Degrees</h2>
              <p>Makindye  </p> <p><strong>View Packages</strong></p>
            </div>
          </a>
        </div>

        <div className="vendors-card">
          <a href="/#packages" className="vendors-card-link">
            <div className="vendors-card-content">
              <img src="\images\executive.png" alt="Executive Rides Ug" />
              <h2>Executive Rides Ug</h2>
              <p>Kampala  </p> <p><strong>View Packages</strong></p>
            </div>
          </a>
        </div>

        <div className="vendors-card">
          <a href="/#packages" className="vendors-card-link">
            <div className="vendors-card-content">
              <img src="\images\strat2x.png" alt="Strat Bridal" />
              <h2>Strat Bridal</h2>
              <p>Bukoto Kampala  </p> <p><strong>View Packages</strong></p>
            </div>
          </a>
        </div>
      </div>
    </section>
    </>
  );
}

export default Vendors;
