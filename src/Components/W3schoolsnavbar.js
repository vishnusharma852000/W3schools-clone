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
                                Tutorials<i class="fas fa-caret-down"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#references">
                                References<i class="fas fa-caret-down"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#exercises">
                                Exercises<i class="fas fa-caret-down"></i>
                            </a>
                        </li>
                    </ul>
                </div>

                {/* cneter */}

                <div class="center"></div>

                {/* right navbar */}

                <div class="rightnav">
                    <div class="icons">
                        <i class="fas fa-toggle-on"></i>
                        <i class="fas fa-globe-asia"></i>
                        <i class="fas fa-search"></i>
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
