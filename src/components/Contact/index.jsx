import React from "react";
import "./contact.css"

function Contact () {
    return (
        
        <section id="contact" className="contact_us">
            
            <div className="contain">
                <div className="header-wrapper">
                    <div className="contact-form-container">
                        <h4>GET IN TOUCH</h4>
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
                                <input type="checkbox" id="checkbox" name="checkbox" checked /> Yes, I would like to receive communications by call / email about the application services.
                            </p>
                            <p className="full-width">
                                <input type="submit" className="submit-btn" value="Submit" />
                                <button className="reset-btn">Reset</button>
                            </p>
                        </form>
                    </div>

                    <div className="contacts contact-wrapper">
                        <ul>
                            <li>content 1 <span className="highlight-text-grey">
                            content 2</span>  content 3</li>
                            <span className="hightlight-contact-info">
                                <li className="email-info"><i className="fa fa-envelope" aria-hidden="true"></i> info@afaazievents.com</li>
                                <li><i className="fa fa-phone" aria-hidden="true"></i> <span className="highlight-text">+256 701 234 567</span></li>
                                <li><i className="fa fa-phone" aria-hidden="true"></i> <span className="highlight-text">+256 772 345 678</span></li>
                            </span>
                        </ul>
                    </div>
                </div>
                
            </div>
            
        </section>
    )
}

export default Contact;