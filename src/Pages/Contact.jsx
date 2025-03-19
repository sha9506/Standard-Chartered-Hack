import { useEffect, useState } from "react";
import Navbar from "../Modules/Navbar/Navbar";
import Camera from "../Modules/Camera/Camera";
import "./Contact.css";

const Contact = () => {
    const [selectedLoan, setSelectedLoan] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        topic: "general"
    });
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        // Retrieve selected loan from localStorage
        const loan = localStorage.getItem("selectedLoan");
        if (loan) {
            setSelectedLoan(loan);
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Here you would typically send the data to your backend
        // For now, we'll just simulate a successful submission
        setSubmitted(true);
        
        // Reset form after submission
        setTimeout(() => {
            setFormData({
                name: "",
                email: "",
                phone: "",
                message: "",
                topic: "general"
            });
            setSubmitted(false);
        }, 3000);
    };

    return (
        <div className="contact-main page-margin">
            <Navbar />
            <Camera />
            
            <div className="contact-header">
                <div className="voice-Main-Head">
                    The loan you have selected is
                    <span className="loan-selected-green"> {selectedLoan || "N/A"}</span>
                </div>
                <h1 className="contact-title">Contact Us</h1>
                <p className="contact-subtitle">
                    Have questions about your {selectedLoan} or need assistance? We're here to help.
                </p>
            </div>

            <div className="contact-container">
                <div className="contact-info">
                    <div className="contact-info-item">
                        <div className="contact-icon">
                            <i className="fas fa-phone-alt"></i>
                        </div>
                        <div className="contact-details">
                            <h3>Phone</h3>
                            <p>+91 1800 123 4567</p>
                            <p>Mon-Fri, 9am-6pm</p>
                        </div>
                    </div>

                    <div className="contact-info-item">
                        <div className="contact-icon">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <div className="contact-details">
                            <h3>Email</h3>
                            <p>support@standardchartered.com</p>
                            <p>We respond within 24 hours</p>
                        </div>
                    </div>

                    <div className="contact-info-item">
                        <div className="contact-icon">
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <div className="contact-details">
                            <h3>Visit Us</h3>
                            <p>Standard Chartered Bank</p>
                            <p>23-25 Mahatma Gandhi Road, Mumbai 400001</p>
                        </div>
                    </div>
                </div>

                <div className="contact-form-container">
                    {submitted ? (
                        <div className="submission-success">
                            <div className="success-icon">✓</div>
                            <h3>Thank you for reaching out!</h3>
                            <p>We've received your message and will contact you soon.</p>
                        </div>
                    ) : (
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your full name"
                                    required
                                />
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="your.email@example.com"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+91 9876543210"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="topic">Topic</label>
                                <select
                                    id="topic"
                                    name="topic"
                                    value={formData.topic}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="general">General Inquiry</option>
                                    <option value="loan">Loan Application</option>
                                    <option value="document">Documentation Issue</option>
                                    <option value="payment">Payment Question</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="How can we help you today?"
                                    rows="5"
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="contact-submit-btn">
                                Send Message <span className="button-arrow">→</span>
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Contact;