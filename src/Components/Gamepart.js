import React from "react";
import w3lynx from "../img/w3lynx_200.png";

export default function Gamepart() {
    return (
        <div className="gamingpart">
            <div className="game">
                <h1>Code Game</h1>
                <h2>Help the Lynx collect pines coins!</h2>
                <a href="https://www.w3schools.com/codegame/index.html">
                    <img src={w3lynx} alt="no img" />
                </a>
                <br />
                <a
                    className="gamebutton"
                    href="https://www.w3schools.com/codegame/index.html"
                >
                    Play Game
                </a>
            </div>
        </div>
    );
}
