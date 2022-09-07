import React from "react";
import Typical from "react-typical";
import "./Profile.css";

const Profile = () => {
    return (
        <div className="profile-container">
            <div className="profile-parent">
                <div className="profile-details"> 
                    <div className="colz">
                        <div className="colz-icon">
                            <a href="https://www.linkedin.com/in/onifade-joshua-7b844322b/">
                                <i className="fa fa-linkedin-square"></i>
                            </a>
                            <a href="https://instagram.com/jay_drayl01">
                                <i className="fa fa-instagram"></i>
                            </a>
                            <a href="https://twitter.com/JayDrayl01">
                                <i className="fa fa-twitter"></i>
                            </a>
                        </div>
                    </div>
                    <div className="profile-details-name">
                        <span className="primary-text">
                            {" "}
                            Hello, I'm <span className="highlighted-text">Joshua</span>
                        </span>
                    </div>
                    <div className="profile-details-role">
                        <span className="primary-text">
                            {" "}
                            <h1>
                                {" "}
                                <Typical loop={Infinity}
                                    steps={[
                                        "Enthusiastic Dev🔴",
                                        1000,
                                        "Frontend Developer💻",
                                        1000,
                                        "React Developer🌐",
                                        1000,
                                    ]} />
                            </h1>
                            <span className="profile-role-tagline">
                                Knack of building applications with frontend operations.
                            </span>
                        </span>
                    </div>
                    <div className="profile-options">
                        <button className="btn primary-btn">
                            {" "}
                            Hire Me {" "}
                        </button>
                        <a href="Developer-Resume-Onifade-Joshua.pdf" download="Developer-Resume-Onifade-Joshua.pdf">
                            <button className="btn highlighted-btn">Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className="profile-picture">
                    <div className="profile-picture-background">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;