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
                <a href="#template">
                    <img src={W3template} alt="nothing" />
                </a>
            </div>
            <button className="templatebtn">BROWSE TEMPLATES</button>
        </div>
    );
}
