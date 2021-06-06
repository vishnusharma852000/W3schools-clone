import React from "react";

export default function Exercise() {
    return (
        <div className="exerciseblock">
            <div className="exercisecontent">
                <h1>Exercises</h1>
                <h2>Test yourself with exercises</h2>
                <div>
                    <button className="bigbtn btn-ex">HTML Exercise</button>
                    <button className="bigbtn btn-ex">CSS Exercise</button>
                    <button className="bigbtn btn-ex">
                        Javascript Exercise
                    </button>
                </div>
                <div>
                    <button className="smallbtn btn-ex">SQL</button>
                    <button className="smallbtn btn-ex">Python</button>
                    <button className="smallbtn btn-ex">PHP</button>
                    <button className="smallbtn btn-ex">jQuery</button>
                    <button className="smallbtn btn-ex">Java</button>
                    <button className="smallbtn btn-ex">C++</button>
                    <button className="smallbtn btn-ex">C#</button>
                </div>
            </div>
        </div>
    );
}
