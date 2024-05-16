import React, { useState, useEffect } from "react";
import "./contact.css";



function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        companyName: "",
        message: "",
        subscribe: false
    });

    // Load saved data from localStorage on component mount
    useEffect(() => {
        const savedFormData = JSON.parse(localStorage.getItem("formData"));
        if (savedFormData) {
            setFormData(savedFormData);
        }
    }, []);

    // Update form data on input change
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === "checkbox" ? checked : value;
        setFormData((prevData) => ({
            ...prevData,
            [name]: newValue
        }));
    };

    // Save form data to localStorage
    useEffect(() => {
        localStorage.setItem("formData", JSON.stringify(formData));
    }, [formData]);

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your submission logic here
        // For example, you can send the form data to a server
        console.log("Form submitted:", formData);
        // Reset form after submission
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
            <div className="contain">
                <div className="header-wrapper">
                    <div className="contact-form-container">
                        <h4>GET IN TOUCH</h4>
                        <h2 className="form-headline">Send us a message</h2>
                        <form id="submit-form" onSubmit={handleSubmit} className="contact-form">
                            <p>
                                <input
                                    id="name"
                                    className="contact-form-input"
                                    type="text"
                                    placeholder="Your Name*"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                />
                                <small className="name-error"></small>
                            </p>
                            {/* Repeat similar input fields for email, company name, message, and checkbox */}
                            <p className="full-width">
                                <input type="submit" className="submit-btn" value="Submit" />
                                <button type="button" className="reset-btn" onClick={() => setFormData({
                                    name: "",
                                    email: "",
                                    companyName: "",
                                    message: "",
                                    subscribe: false
                                })}>Reset</button>
                            </p>
                        </form>
                    </div>

                    {/* Add your contact information */}
                    <div className="contacts contact-wrapper">
                        <ul>
                            <li>content 1 <span className="highlight-text-grey">content 2</span> content 3</li>
                            <span className="highlight-contact-info">
                                <li className="email-info"><i className="fa fa-envelope" aria-hidden="true"></i> afaazievents.com</li>
                                <li><i className="fa fa-phone" aria-hidden="true"></i> <span className="highlight-text">+256 111 111 111</span></li>
                                <li><i className="fa fa-phone" aria-hidden="true"></i> <span className="highlight-text">+256 111 111 111</span></li>
                            </span>
                        </ul>
                    </div>
                </div>
                {/* Include your side image */}
                <img src="\images\baye.jpg" alt="Image 1" />
            </div>
        </section>
    );
}

export default Contact;
