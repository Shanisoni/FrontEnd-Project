import React from "react";
import "./aboutPage.scss"; // Import the styling

const AboutPage = () => {
    return (
        <div className="aboutPage">
            <div className="contentContainer">
                {/* Main content section */}
                <div className="bioContainer">
                    <h2>About the Developer</h2>
                    <h3>Nishchal Sachan</h3>
                    <p>
                        Hello! I'm a passionate Full-Stack Web Developer with a deep focus on crafting seamless, user-centric applications. With hands-on expertise in React, JavaScript, CSS, and the powerful MERN stack (MongoDB, Express.js, React, Node.js), I thrive on building dynamic, responsive, and high-performing websites that deliver exceptional user experiences.<br /><br />

                        I’m always eager to explore emerging technologies and stay ahead of the curve. Whether it's working with Python, Java, or expanding my proficiency in SQL, I’m driven to continuously improve my skillset and approach every project with a fresh perspective.<br />

                        From frontend development to backend solutions, my goal is always to create applications that are both beautiful and functional. I specialize in building clean, maintainable code that not only meets but exceeds client expectations, ensuring scalable and efficient solutions.<br />

                        As I embark on my journey into freelancing and software development, I’m excited to collaborate on innovative projects and take on new challenges that push my capabilities further. I’m dedicated to delivering high-quality work that solves real-world problems while building lasting, meaningful relationships along the way.<br />

                        Feel free to connect with me if you're looking for a developer to bring your ideas to life or if you're interested in collaborating on exciting new ventures!
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
                </div>

                {/* Profile Image */}
                <div className="imageContainer">
                    <img src="Profilephoto.jpg" alt="Developer" />
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
