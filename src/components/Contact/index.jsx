import React, { useState, useEffect } from "react";
import "./contact.css";
import NavBar from "../NavBar";

const initialFormData = {
    name: "",
    email: "",
    companyName: "",
    message: "",
    subscribe: false
};

function Contact() {
    const [formData, setFormData] = useState(initialFormData);

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
       

        setFormData(initialFormData);
    };

    const handleReset = () => {
        setFormData(initialFormData);
    };

    return (
        <section id="contact" className="contact-container">
            <NavBar />
            <div className="contact-content">
                <div className="contact-form-container">
                    <h1>GET IN TOUCH</h1>
                    <h2 className="form-headline">Send us a message</h2>
                    <form onSubmit={handleSubmit} className="contact-form">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Your Name*"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Your Email*"
                            required
                        />
                        <input
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleInputChange}
                            placeholder="Company Name*"
                            required
                        />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Your Message*"
                            minLength="20"
                            rows="7"
                            required
                        ></textarea>
                        <label htmlFor="subscribe">
                            <input
                                type="checkbox"
                                id="subscribe"
                                name="subscribe"
                                checked={formData.subscribe}
                                onChange={handleInputChange}
                            />{" "}
                            I agree to the processing of my personal data for feedback analysis.
                        </label>
                        <div className="button-group">
                            <input type="submit" className="submit-btn" value="Submit" />
                            
                        </div>
                    </form>
                </div>
                <div className="contactpage-info">
                    <h1>Contact Information</h1>
                    <ul>
                        <li>
                            <i className="fas fa-map-marker-alt"></i> Address:{" "}
                            <span>Innovation Village,</span>
                        </li>
                        <li>
                            <i className="fa fa-home" aria-hidden="true"></i> Location:{" "}
                            <span>Kampala, Uganda</span>
                        </li>
                        <li>
                            <i className="fas fa-envelope"></i> Email:{" "}
                            <a href="mailto:afaazi@gmail.com">afaazi@gmail.com</a>
                        </li>
                        <li>
                            <i className="fas fa-phone"></i> Phone:{" "}
                            <span>+256 759 247 179</span>
                        </li>
                    </ul>
                    <img src="/images/mona.png" alt="mona" className="contact-image" />
                </div>
            </div>
        </section>
    );
}

export default Contact;
