import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./contactPage.scss"; // Import the custom CSS file

const ContactPage = () => {
  const form = useRef(); // Form reference
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // Loading state

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    setIsSubmitting(true); // Set loading state

    emailjs
      .sendForm(
        "service_n40qigl", // Service ID
        "template_wtl1zmb", // Template ID
        form.current, // Form reference
        "pMoNR7z4RCbDQ8WbA" // Public Key
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setStatus("Your message has been sent successfully!");
          e.target.reset(); // Reset form fields
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          setStatus("Failed to send message. Please try again later.");
        }
      )
      .finally(() => {
        setIsSubmitting(false); // Remove loading state
      });
  };

  

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
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:shanisoni7084@gmail.com">
                  shanisoni7084@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/shanisoni"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-linkedin"></i> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Shanisoni"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-github"></i> GitHub
                </a>
              </li>
              <li>
                <strong>Location:</strong> Ghaziabad, India
              </li>
            </ul>
          </div>

          {status && <p className="statusMessage">{status}</p>}
        </div>

        <div className="formContainer">
          <h3>Send Me a Message</h3>
          <form ref={form} onSubmit={handleSubmit}>
            <div className="formGroup">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="user_name"
                required
                placeholder="Enter your full name"
                aria-label="Your Name"
              />
            </div>

            <div className="formGroup">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="user_email"
                required
                placeholder="Enter your email"
                aria-label="Your Email"
              />
            </div>

            <div className="formGroup">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Write your message..."
                aria-label="Your Message"
              />
            </div>

            <button
              type="submit"
              className="submitBtn"
              disabled={isSubmitting}
              aria-label="Send Message"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
