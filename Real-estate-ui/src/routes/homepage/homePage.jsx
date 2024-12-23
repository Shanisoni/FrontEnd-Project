import React from "react";
import CountUp from "react-countup";
import SearchBar from "../../components/searchBar/searchBar";
import "./homePage.scss";

function HomePage() {
    return (
        <div className="homePage">
            <div className="textContainer">
                <div className="wrapper">
                    <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
                    <p>
                        Discover the best real estate options tailored to your needs. 
                        Whether you&apos;re looking for your dream home, a rental property, or 
                        a lucrative investment opportunity, we&apos;ve got you covered. Explore our 
                        extensive listings and turn your aspirations into reality with ease and confidence.
                    </p>

                    <SearchBar />

                    <div className="boxes">
                        <div className="box">
                            <h1>
                                <CountUp start={0} end={16} duration={2.5} suffix="+" />
                            </h1>
                            <h2>Years of Experience</h2>
                        </div>

                        <div className="box">
                            <h1>
                                <CountUp start={0} end={200} duration={2} />
                            </h1>
                            <h2>Award Gained</h2>
                        </div>

                        <div className="box">
                            <h1>
                                <CountUp start={0} end={1200} duration={2} suffix="+" />
                            </h1>
                            <h2>Property Ready</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="imgContainer">
                <img src="/bg.png" alt="Real Estate Background" />
            </div>
        </div>
    );
}

export default HomePage;
