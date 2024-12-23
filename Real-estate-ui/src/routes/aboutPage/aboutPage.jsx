import React from "react";
import "./aboutPage.scss"; // Import the styling

const AboutPage = () => {
  return (
    <div className="aboutPage">
      <div className="contentContainer">
        {/* Main content section */}
        <div className="bioContainer">
          <h2>About the Developer</h2>
          <h3>Shani Soni</h3>
          <p>
            Hello! I&#39;m a passionate Full-Stack Web Developer with a deep focus
            on crafting seamless, user-centric applications. With hands-on
            expertise in React, JavaScript, CSS, and the powerful MERN stack
            (MongoDB, Express.js, React, Node.js), I thrive on building dynamic,
            responsive, and high-performing websites that deliver exceptional
            user experiences.
          </p>
          <p>
            I&#39;m always eager to explore emerging technologies and stay ahead of
            the curve. Whether it&#39;s working with Python, Java, or expanding my
            proficiency in SQL, I&#39;m driven to continuously improve my skillset
            and approach every project with a fresh perspective.
          </p>
          <p>
            From frontend development to backend solutions, my goal is always to
            create applications that are both beautiful and functional. I
            specialize in building clean, maintainable code that not only meets
            but exceeds client expectations, ensuring scalable and efficient
            solutions.
          </p>
          <p>
            As I embark on my journey into freelancing and software development,
            I&#39;m excited to collaborate on innovative projects and take on new
            challenges that push my capabilities further. I&#39;m dedicated to
            delivering high-quality work that solves real-world problems while
            building lasting, meaningful relationships along the way.
          </p>
          <p>
            Feel free to connect with me if you&#39;re looking for a developer to
            bring your ideas to life or if you&#39;re interested in collaborating on
            exciting new ventures!
          </p>

          {/* Contact Details Section */}
          <div className="contactDetails">
            <h3>Contact Information</h3>
            <ul>
              <li>
                <strong>Email:</strong>{" "}
                <a href="shanisoni7084@gmail.com">
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
                <strong>Location:</strong> Delhi, India
              </li>
            </ul>
          </div>
        </div>

        {/* Profile Image Section */}
        <div className="imageContainer">
          <img
            src="https://res.cloudinary.com/dl7e8qndf/image/upload/v1734803406/HeroImage_dwjhvz.jpg"
            alt="Developer's Profile"
            className="ProfilePhoto"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
