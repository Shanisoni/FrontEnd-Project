import React, { useState } from 'react';
import './contactPage.scss';  // Import the custom CSS file

const ContactPage = () => {
    // const [formData, setFormData] = useState({
    //     name: '',
    //     email: '',
    //     message: ''
    // });

    // const [status, setStatus] = useState('');

    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({ ...formData, [name]: value });
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     // Example using Formspree - replace with your action URL
    //     const form = e.target;
    //     const formData = new FormData(form);

    //     fetch(form.action, {
    //         method: 'POST',
    //         body: formData
    //     })
    //         .then(() => {
    //             setStatus('Your message has been sent successfully!');
    //             setFormData({ name: '', email: '', message: '' }); // Reset form fields
    //         })
    //         .catch(() => {
    //             setStatus('Something went wrong. Please try again.');
    //         });
    // };

    return (
        <section className="contactPage">
            <div className="contentContainer">
                <div className="bioContainer">
                    <h2>Contact Me</h2>
                    <p>
                        I’d love to hear from you! Whether you have a question or want to
                        collaborate on a project, feel free to reach out. Use the form below
                        or contact me directly via email or phone.
                    </p>

                    <div className="contactDetails">
                        <h3>Contact Information</h3>
                        <ul>
                            <li><strong>Email:</strong> <a href="mailto:sachannishchal@gmail.com">sachannishchal@gmail.com</a></li>
                            <li>
                                <a href="http://www.linkedin.com/in/sachannishchal"><i class="fa-brands fa-linkedin"></i>Linkedin</a>
                            </li>
                            <li>
                                <a href="https://github.com/Nishchal-Sachan"><i class="fa-brands fa-github"></i>Github</a>
                            </li>
                            <li><strong>Location:</strong> Delhi,India</li>
                        </ul>
                    </div>

                    {status && <p className="statusMessage">{status}</p>}
                </div>

                {/* <div className="formContainer">
                    <h3>Send Me a Message</h3>
                    <form
                        onSubmit={handleSubmit}
                        action="https://formspree.io/f/mwkdojow" // Replace with your Formspree URL
                        method="POST"
                    >
                        <div className="formGroup">
                            <label htmlFor="name">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                placeholder="Enter your full name"
                            />
                        </div>

                        <div className="formGroup">
                            <label htmlFor="email">Your Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className="formGroup">
                            <label htmlFor="message">Your Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                                placeholder="Write your message..."
                            />
                        </div>

                        <button type="submit" className="submitBtn">Send Message</button>
                    </form>
                </div> */}
            </div>
        </section>
    );
};

export default ContactPage;
