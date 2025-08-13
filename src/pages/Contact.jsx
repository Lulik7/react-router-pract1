import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Contact.css';



function Contact() {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/');
    };

    return (
        <div className="contact-container">
            <h2> Contact us:</h2>
            <p> Write us, if you have any questions or suggestions...</p>

            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="5" required />
                </div>

                <button type="submit" className="submit-button">Send</button>
            </form>
        </div>
    );
}

export default Contact;