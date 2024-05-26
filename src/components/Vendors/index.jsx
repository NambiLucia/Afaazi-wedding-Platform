
import React from "react";
import "./vendors.css";

function Vendors() {
  return (
    <section id="vendors" className="vendors-gallery">
      <div className="vendors-header">
        <h2>TRENDING VENDORS</h2>
      </div>

      <div className="vendors-card-container">
       
        <div className="vendors-card">
          <a href="/#packages" className="vendors-card-link">
            <div className="vendors-card-content">
              <img src="\images\mona.png" alt="Mona" />
              <h2>Mona Faces</h2>
              <p>Kisementi Kampala <strong>2M-4.5M</strong></p>
            </div>
          </a>
        </div>

        <div className="vendors-card">
          <a href="/#packages" className="vendors-card-link">
            <div className="vendors-card-content">
              <img src="\images\ashton.png" alt="Ashton" />
              <h2>Ashton Events</h2>
              <p>Seeta Mukono <strong>2M-5M</strong></p>
            </div>
          </a>
        </div>

        <div className="vendors-card">
          <a href="/#packages" className="vendors-card-link">
            <div className="vendors-card-content">
              <img src="\images\zziwa.png" alt="Zziwa" />
              <h2>Hair by Zziwa</h2>
              <p>Kisementi Kampala <strong>2M-4.5M</strong></p>
            </div>
          </a>
        </div>

        <div className="vendors-card">
          <a href="/#packages" className="vendors-card-link">
            <div className="vendors-card-content">
              <img src="\images\kembabzi.png" alt="Kembabazi" />
              <h2>Kembabazi Catering</h2>
              <p>Naguru Kampala <strong>1M-4M</strong></p>
            </div>
          </a>
        </div>
      </div>

      <div className="vendors-card-container">
        <div className="vendors-card">
          <a href="/#packages" className="vendors-card-link">
            <div className="vendors-card-content">
              <img src="\images\janzi.png" alt="Janzi Band" />
              <h2>Janzi Band</h2>
              <p>Kampala <strong>2M-5M</strong></p>
            </div>
          </a>
        </div>

        <div className="vendors-card">
          <a href="/#packages" className="vendors-card-link">
            <div className="vendors-card-content">
              <img src="\images\latitude.png" alt="Latitude 0 Degrees" />
              <h2>Latitude 0 Degrees</h2>
              <p>Makindye <strong>2M-5M</strong></p>
            </div>
          </a>
        </div>

        <div className="vendors-card">
          <a href="/#packages" className="vendors-card-link">
            <div className="vendors-card-content">
              <img src="\images\executive.png" alt="Executive Rides Ug" />
              <h2>Executive Rides Ug</h2>
              <p>Kampala <strong>2M-6M</strong></p>
            </div>
          </a>
        </div>

        <div className="vendors-card">
          <a href="/#packages" className="vendors-card-link">
            <div className="vendors-card-content">
              <img src="\images\strat2x.png" alt="Strat Bridal" />
              <h2>Strat Bridal</h2>
              <p>Bukoto Kampala <strong>2M-8M</strong></p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Vendors;
