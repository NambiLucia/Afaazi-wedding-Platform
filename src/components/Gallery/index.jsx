// pages/Gallery.js
import React from 'react';
import Header from '../NavBar'
import Footer from '../Footer';
import NavBar from '../NavBar';
import "./gallery.css";

function Gallery() {
  return (
    <div id="gallery">
      <NavBar />
      
      <h1>Gallery</h1>
      <p>Explore our event gallery!</p>
      <div className='photo-container'>
        <div className='Item'>
        
        </div>

      </div>
      <Footer/>
    </div>
  );
}

export default Gallery;
