import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import w3schools from "../img/w3schools.jpg";

export default function W3schoolsnavbar() {
    return (
        <>
            <div class="main">
                {/* leftnavbar */}

                <div class="leftnav">
                    <a href="https://www.w3schools.com/">
                        <img src={w3schools} alt="no logo" class="logo" />
                    </a>
                    <ul>
                        <li>
                            <a href="#tutorials">
                                Tutorials
                                <FontAwesomeIcon icon="caret-down" />
                            </a>
                        </li>
                        <li>
                            <a href="#references">
                                References
                                <FontAwesomeIcon icon="caret-down" />
                            </a>
                        </li>
                        <li>
                            <a href="#exercises">
                                Exercises
                                <FontAwesomeIcon icon="caret-down" />
                            </a>
                        </li>
                    </ul>
                </div>

                {/* center */}

                <div class="center"></div>

                {/* right navbar */}

                <div class="rightnav">
                    <div class="icon">
                        <a href="#theme" className="blackicon">
                            <FontAwesomeIcon icon="circle" />
                        </a>
                        <a href="globallang" className="blackicon">
                            <FontAwesomeIcon icon="globe-asia" />
                        </a>
                        <a href="search" className="blackicon">
                            <FontAwesomeIcon icon="search" />
                        </a>
                    </div>
                    <div class="btn">
                        <a class="btn-pv" href="https://courses.w3schools.com/">
                            Paid Courses
                        </a>
                        <a
                            class="btn-li"
                            href="https://profile.w3schools.com/log-in?redirect_url=https%3A%2F%2Fmy-learning.w3schools.com"
                        >
                            Log In
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
