
import React from "react";
import Header from "../NavBar";
import Footer from "../Footer";
import NavBar from "../NavBar";
import "./photo.css";

function Gallery() {
  return (
    <div id="photography">
      <NavBar />

      <h1>Gallery</h1>
      <p>Explore our event gallery!</p>

      <section>
        <div className="photography-header">
          <h3>Photography & Videography</h3>
        </div>

        <div className="photography-card-container">
          <div className="photography-card">
            <div className="photography-card-content">
              <div>
                <img src="\images\mona.png" alt="mona" />
              </div>
              <p>Kisementi Kampala</p>
              <h2>Mona Faces</h2>

            </div>
          </div>



          <div className="overlay">
                <div className="text">
                  <h2>Golazo Photography</h2>
                  <strong>
                    <p>Packages</p>
                  </strong>
                  <br />
                  <p>Ruby: ugx 2,900,000</p>
                  <p>Silver: ugx 4,300,000</p>
                  <p>Gold: ugx 7,500,000</p>
                  <p>Location: Bukoto,Kisaasi</p>
                  <a href="https://www.thegolazoproject.org/" target="_blank">
                    <p>Golazo Website</p>
                  </a>
                </div>
              </div>







          <div className="photography-card">
            <div className="photography-card-content">
              <div>
                <img src="\images\zziwa.png" alt="mona" />
              </div>
              <p>Kisementi Kampala</p>
              <h2>Hair by Zziwa</h2>
            </div>
          </div>
          <div className="photography-card">
            <div className="photography-card-content">
              <div>
                <img src="\images\kembabzi.png" alt="mona" />
              </div>
              <p>Naguru Kampala</p>
              <h2>Kembabazi Catering</h2>
            </div>
          </div>
        </div>
        <div className="photography-card-container">
          <div className="photography-card">
            <div className="photography-card-content">
              <div>
                <img src="\images\ashton.png" alt="mona" />
              </div>
              <p>Seeta Mukono</p>
              <h2>Ashton Events</h2>
            </div>
          </div>

          <div className="photography-card">
            <div className="photography-card-content">
              <div>
                <img src="\images\executive.png" alt="mona" />
              </div>
              <p>Kampala</p>
              <h2>Executive Rides Ug</h2>
            </div>
          </div>

          <div className="photography-card">
            <div className="photography-card-content">
              <div>
                <img src="\images\strat2x.png" alt="mona" />
              </div>
              <p>Bukoto Kampala</p>
              <h2>Strat Bridal</h2>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Gallery;
