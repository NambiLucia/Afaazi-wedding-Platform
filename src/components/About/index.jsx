import React from "react";
import "./about.css";
import NavBar from "../NavBar";

function About() {
  return (
    <div>
      <NavBar />
      <div className="about-container">
        <div>
          <img className="about-img" src="\images\maids.png" alt="bride" />
        </div>
        <div>
          <h1 className="about-heading">WHO WE ARE</h1>
          <p className="about-paragraph">
            Planning your wedding can be both thrilling and overwhelming. Once
            the initial joy of the proposal wears off, the challenge of finding
            the right vendors becomes apparent.
            <br />
            <br />
            Afaazi-Events is here to simplify this process for you!
            <br />
            <br />
            Thanks to our expanding vendor list, thorough verification system,
            and clear pricing, we
            <br />
            assure you of finding dependable vendors to make your special day
            unforgettable.
          </p>
        </div>
      </div>

        <h1 className="about-heading2">How will Afaazi-Events benefit you?</h1>
      <div className="about-container2">
    
      <div>
        <h3>Vendors</h3>
        <ul>
            <li>Increased market reach through our growing user-base</li>
            <li>Increased credibility</li>
            <li>Run affordable advertisements</li>
        </ul>



      </div>

      <div>
        <h3>Users</h3>

        <ul>
            <li>Get access to verified vendors</li>
            <li>Identify reliable vendors</li>
            <li>Search for vendors of your choice</li>
        </ul>
        


      </div>





      </div>















    </div>
  );
}
export default About;
