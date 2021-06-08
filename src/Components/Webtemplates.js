import React from "react";
import W3template from "../img/w3css_templates.jpg";

export default function Webtemplates() {
    return (
        <div className="templates">
            <div className="templatecontent">
                <h1>Web Templates</h1>
                <p>
                    Browse our selection of <span>free</span> responsive HTML
                    Templates
                </p>
            </div>
            <div className="templateimage">
                <a href="https://www.w3schools.com/w3css/w3css_templates.asp">
                    <img src={W3template} alt="nothing" />
                </a>
            </div>
            <a
                className="templatebtn"
                href="https://www.w3schools.com/w3css/w3css_templates.asp"
            >
                BROWSE TEMPLATES
            </a>
        </div>
    );
}
