import React from "react";
import w3lynx from "../img/w3lynx_200.png";

export default function Gamepart() {
    return (
        <div className="gamingpart">
            <div className="game">
                <h1>Code Game</h1>
                <h2>Help the Lynx collect pines coins!</h2>
                <a href="#game">
                    <img src={w3lynx} alt="no img" />
                </a>
                <br />
                <button className="gamebutton">Play Game</button>
            </div>
        </div>
    );
}
