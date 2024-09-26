import React from "react";
import "./hero.css"

function Hero () {
    return (
        <section id="home" className="section-showcase">
            <div className="container">
                <div>
                    <h1>Afaazi-Events</h1>

                   <i><div class="centered">Planning • Booking • Execute</div></i> 
                 
                   <div>
                    <a href="/login" className="btn">Plan with us </a>
                    </div>  

                   
                </div>
               
            </div>
            
        </section>
    )
}

export default Hero;

