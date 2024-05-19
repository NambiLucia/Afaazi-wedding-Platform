import React, { useState, useEffect } from "react";
import "./contact.css";
import NavBar from "../NavBar";



function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        companyName: "",
        message: "",
        subscribe: false
    });

   
    useEffect(() => {
        const savedFormData = JSON.parse(localStorage.getItem("formData"));
        if (savedFormData) {
            setFormData(savedFormData);
        }
    }, []);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === "checkbox" ? checked : value;
        setFormData((prevData) => ({
            ...prevData,
            [name]: newValue
        }));
    };

  
    useEffect(() => {
        localStorage.setItem("formData", JSON.stringify(formData));
    }, [formData]);

 
    const handleSubmit = (e) => {
        e.preventDefault();
       
        console.log("Form submitted:", formData);
        setFormData({
            name: "",
            email: "",
            companyName: "",
            message: "",
            subscribe: false
        });
    };

    return (
       
        <section id="contact" className="contact_us">   
         <NavBar />
       
        <div className="contain">
            
                  <div className="contact-form-container">

                    
                  <h1>GET IN TOUCH</h1>
                        <h2 className="form-headline">Send us a message</h2>
                      <form id="submit-form" action="" className="contact-form">
                        <p>
                            <input id="name" className="contact-form-input" type="text" placeholder="Your Name*" />
                            <small className="name-error"></small>
                        </p>
                        <p>
                            <input id="email" className="contact-form-input" type="email" placeholder="Your Email*" />
                            <small className="name-error"></small>
                        </p>
                        <p className="full-width">
                            <input id="company-name" className="contact-form-input" type="text" placeholder="Company Name*" required />
                            <small></small>
                        </p>
                        <p className="full-width">
                            <textarea className="contact-textarea" minlength="20" id="message" cols="30" rows="7" placeholder="Your Message*" required></textarea>
                            <small></small>
                        </p>
                        <p className="full-width">
                            <input type="checkbox" id="checkbox" name="checkbox" checked /> I agree to the processing of my personal data for feedback analysis.
                        </p>
                        <p className="full-width">
                            <input type="submit" className="submit-btn" value="Submit" />
                            <button className="reset-btn">Reset</button>
                        </p>
                      </form>
                  </div>
                
                    <div class="contacts">
                        <ul class ="list">
                            <h1><strong>Contact Information</strong></h1>
                            <li>
                           
                                 <i className="fas fa-map-marker-alt"></i> Address:  
                                <span className="highlight-text-grey">Innovation Village,</span>
                            </li>
                            <li>
                                <i class="fa fa-home" aria-hidden="true"></i> Location: 
                                <span className="highlight-text-grey">Kampala, Uganda</span>
                            </li>
                             <li>
                                <i className="fas fa-envelope"></i> Email: 
                                <a href="mailto:afaazi@gmail.com" className="highlight-text">afaazi@gmail.com</a>
                            </li>
                            <li>
                                <i className="fas fa-phone"></i>  Phone:             
                                <span className="highlight-text-grey">  +256 759 247 179</span>
                            </li>
                            
                        </ul>
                        <img class="pic" src="\images\mona.png" alt="mona"/>
                    </div>   
                </div>    
        
    </section>
)
}

export default Contact;
