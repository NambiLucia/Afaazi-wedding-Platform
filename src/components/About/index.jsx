import React from "react";
import "./about.css"
import { FaStar} from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="section-about">
      <div className="about-overlay">
        <div className="about-text">
          <h2>Why Afaazi</h2>
        </div>
      </div>

      <div className="about-card-container">

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

export default About;