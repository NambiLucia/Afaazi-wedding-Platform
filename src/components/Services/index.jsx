import React from "react";
import "./services.css"
import { FaStar} from 'react-icons/fa';

function Services (){
  return (
    <section id="services" className="section-services">
      <div className="services-overlay">
      </div>

  
      <h2>SERVICE CATEGORIES</h2>
       

      <div className="services-card-container">

        <div className="card">
          <div className="card-content">
            <h2>Photography & Videography</h2>
            <div>
              <img src="\images\baye.jpg" alt="photography"/>
              <h4>Golazo photography</h4>
                <div className="icons">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
              

            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <h2>Food and Catering</h2>
            <div>
              <img src="\images\exceed-food.png" alt="food"/>
              <h4>Exceed catering</h4>
              <div className="icons">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
              
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <h2>Decoration</h2>
            <div>
              <img src="\images\icandyUg.png" alt="decoration"/>
              <h4>iCandy Ug</h4>
              <div className="icons">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
              
              </div>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <h2>Entertainment</h2>
            <div>
              <img src="images\janzi.png" alt="band"/>
              <h4>Janzi band</h4>
              <div className="icons">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
              

            </div>
          </div>
        </div>
        

      </div>

    </section>





  )
}

export default Services;