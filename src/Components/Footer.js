import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
    return (
        <div className="footer">
            <div className="footercontent">
                <div className="divblock1">
                    <div className="content1">
                        <button className="footerbutton">COURSES</button>
                        <button className="footerbutton">QUIZZES</button>
                        <button className="footerbutton">EXERCISE</button>
                    </div>
                    <div className="content2">
                        <a href="#forum">FORUM</a>
                        <span> | </span>
                        <a href="#about">ABOUT</a>
                    </div>
                </div>
                <div className="divblock2">
                    <div className="social">
                        <FontAwesomeIcon icon={["fab", "facebook-square"]} />
                        <FontAwesomeIcon icon={["fab", "instagram"]} />
                        <FontAwesomeIcon icon={["fab", "linkedin"]} />
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
                    <FontAwesomeIcon
                        icon={["far", "thumbs-up"]}
                    ></FontAwesomeIcon>
                </div>
                <div className="divblock5">
                    <button className="footerbtn">W3SCHOOLS SHOP</button>
                </div>
            </div>
        </div>
    );
}
