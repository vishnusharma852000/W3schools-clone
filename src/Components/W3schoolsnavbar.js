import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import w3schools from "../img/w3schools.jpg";

export default function W3schoolsnavbar() {
    return (
        <>
            <div class="main">
                {/* leftnavbar */}

                <div class="leftnav">
                    <a href="#logo">
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

                {/* cneter */}

                <div class="center"></div>

                {/* right navbar */}

                <div class="rightnav">
                    <div class="icon">
                        <FontAwesomeIcon icon="circle" />
                        <FontAwesomeIcon icon="globe-asia" />
                        <FontAwesomeIcon icon="search" />
                    </div>
                    <div class="btn">
                        <button class="btn-pv">Paid Courses</button>
                        <button class="btn-li">Log In</button>
                    </div>
                </div>
            </div>
        </>
    );
}
