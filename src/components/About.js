import React from "react";
import './About.css'

import AboutImg from '../Images/About-Img.jpeg';

function About() {
    return (
        <div>
            <div className="section">
                <div className="container">
                    <div className="content-section">
                        <div className="title">
                            <h1>About Us</h1>
                        </div>
                        <div className="content">
                            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing</h3>
                            <p>About It is a CBIT student help desk web application, where the students
                                can resolve their queries with higher authorities. This helps to
                                allocate the query to designated college authority and resolve their
                                issues. We connect students with different departments of CBIT like
                                transport, Library, Sports, Academic Examination Cell, Accounts etc....
                                Contact Us Get in touch Need help choosing a issue or can't find answers
                                to your question in our FAQ centre? Our team is here to help! Feel free
                                to write us at """""mail""""" -------Social media connect</p>
                            <div className="button">
                                <a href="">Read More</a>
                            </div>
                        </div>
                        <div className="social">
                            <a href=""><i className="fab fa-facebook-f"></i></a>
                            <a href=""><i className="fab fa-twitter"></i></a>
                            <a href=""><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    <div className="image-section">
                        <img src={AboutImg}/>
                    </div>
                </div>
            </div>
            {/* <p>
        About It is a CBIT student help desk web application, where the students
        can resolve their queries with higher authorities. This helps to
        allocate the query to designated college authority and resolve their
        issues. We connect students with different departments of CBIT like
        transport, Library, Sports, Academic Examination Cell, Accounts etc....
        Contact Us Get in touch Need help choosing a issue or can't find answers
        to your question in our FAQ centre? Our team is here to help! Feel free
        to write us at """""mail""""" -------Social media connect
      </p> */}
        </div>
    );
}

export default About;
