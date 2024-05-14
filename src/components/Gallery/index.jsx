import React from 'react';
import './gallery.css';
import NavBar from '../NavBar';


function Gallery () {
  const imageNames = [
    "side1.png",
    "tile1.png",
    "tile2.png",
    "tile3.png",
    "side2.png",
    "side3.png",
    "tile4.png",
    "tile5.png",
    "tile6.png",
    "tunnel.png",
    "side4.png",
    "tile7.png",
    "tile8.png",
    "tile9.png",
    "side5.png",
    "side6.png",
    "tile10.png",
    "tile11.png",
    "tile12.png",
    "side7.png",
    "side10.png",
    "tile13.png",
    "tile14.png",
    "tile15.png",
    "side8x.png",
    "side9.png",
    "tile16.png",
    "tile17.png",
    "tile18.png",
    "tile19.png",
    
    
  ];

  return (
   
    <div className="gallery-container">
        <NavBar />
      <h1 className="gallery-title">Afaazi Gallery</h1>
      <div className="gallery">
        {imageNames.map((imageName, index) => (
          <div key={index} className="gallery-card">
            <img src={`/images/${imageName}`} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
