import React from 'react';
import './gallery.css';


function Gallery () {
  const imageNames = [
    "zziwa.png",
    "strat2x.png",
    "icandyUg.png",
    "janzi.png",
    "mona.png",
    "fenon.png",
    "ashton.png",
    "baraka.png",
    "baye.jpg",
    "blog1.png",
    "dalausi.png",
    "skyz.png",
    "tents.png",
    "Emcee.png",
    "exceed-food.png",
    
  ];

  return (
   
    <div className="gallery-container">
      <h1 className="gallery-title">Afaazi Gallery</h1>
      <div className="gallery">
        {imageNames.map((imageName, index) => (
          <div key={index} className="gallery-card">
            <img src={`/images/${imageName}`} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
      <a href="/bookingpage" className="register-button"><button>Register</button></a>
    </div>
  );
}

export default Gallery;
