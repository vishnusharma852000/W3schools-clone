import React from "react";
import Color from "../img/color.jpg";

export default function Colorpicker() {
    return (
        <div className="colorpic">
            <div className="colorheading">
                <h1>Color Picker</h1>
                <p>W3Schools' famous color picker</p>
                <a href="https://www.w3schools.com/colors/colors_picker.asp">
                    <img src={Color} alt="no img" />
                </a>
            </div>
        </div>
    );
}
