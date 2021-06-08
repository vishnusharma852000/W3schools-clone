import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
    return (
        <div className="footer">
            <div className="footercontent">
                <div className="divblock1">
                    <div className="content1">
                        <a
                            className="footerbutton"
                            href="https://courses.w3schools.com/"
                        >
                            COURSES
                        </a>
                        <a
                            className="footerbutton"
                            href="https://www.w3schools.com/quiztest/default.asp"
                        >
                            QUIZZES
                        </a>
                        <a
                            className="footerbutton"
                            href="https://www.w3schools.com/html/html_exercises.asp"
                        >
                            EXERCISE
                        </a>
                    </div>
                    <div className="content2">
                        <a href="https://w3schools.invisionzone.com/">FORUM</a>
                        <span> | </span>
                        <a href="https://www.w3schools.com/about/default.asp">
                            ABOUT
                        </a>
                    </div>
                </div>
                <div className="divblock2">
                    <div className="social">
                        <a
                            href="https://www.facebook.com/w3schoolscom/"
                            className="whiteicon"
                        >
                            <FontAwesomeIcon
                                icon={["fab", "facebook-square"]}
                            />
                        </a>
                        <a
                            href="https://www.instagram.com/w3schools.com_official/"
                            className="whiteicon"
                        >
                            <FontAwesomeIcon icon={["fab", "instagram"]} />
                        </a>
                        <a
                            href="https://www.linkedin.com/company/w3schools.com/"
                            className="whiteicon"
                        >
                            <FontAwesomeIcon icon={["fab", "linkedin"]} />
                        </a>
                    </div>
                </div>
                <div className="divblock3">
                    <p>
                        W3Schools is optimized for learning, testing, and
                        training. Examples might be simplified to improve
                        reading and basic understanding. Tutorials, references,
                        and examples are constantly reviewed to avoid errors,
                        but we cannot <br /> warrant full correctness of all
                        content. While using this site, you agree to have read
                        and accepted our terms of use, cookie and privacy
                        policy. <br />
                        Copyright 1999-2021 by Refsnes Data. All Rights
                        Reserved.
                    </p>
                </div>
                <div className="divblock4">
                    <a href="#thumbsup">
                        <FontAwesomeIcon
                            className="whiteicon"
                            icon={["far", "thumbs-up"]}
                        ></FontAwesomeIcon>
                    </a>
                </div>
                <div className="divblock5">
                    <a className="footerbtn" href="https://shop.w3schools.com/">
                        W3SCHOOLS SHOP
                    </a>
                </div>
            </div>
        </div>
    );
}
