import React from "react";

export default function W3schoolscontent() {
    return (
        <div className="content">
            {/* html */}

            <div className="first">
                <div className="leftfirst">
                    <h1>HTML</h1>
                    <p>The language for building web pages</p>
                    <button className="learnhtml">Learn HTML</button>
                    <br />
                    <button className="refhtml">HTML Reference</button>
                </div>
                <div className="rightfirst">
                    <div className="htmlprog"></div>
                </div>
            </div>

            {/* css */}

            <div className="second">
                <div className="secondleft">
                    <h1>CSS</h1>
                    <p>The language for styling web pages</p>
                    <button className="learncss">Learn CSS</button>
                    <br />
                    <button className="refcss">CSS Reference</button>
                </div>
                <div className="secondright">
                    <div className="cssprog"></div>
                </div>
            </div>

            {/* javascript */}

            <div className="third">
                <div className="thirdleft">
                    <h1>Javascript</h1>
                    <p>The language for programming web pages</p>
                    <button className="learnjs">Learn Javascript</button>
                    <br />
                    <button className="refjs">Javascript Reference</button>
                </div>
                <div className="thirdright">
                    <div className="jsprog"></div>
                </div>
            </div>

            {/* python */}

            <div className="fourth">
                <div className="fourthleft">
                    <h1>PYTHON</h1>
                    <p>The popular programming language</p>
                    <button className="learnpy">Learn PYTHON</button>
                    <br />
                    <button className="refpy">PYTHON Reference</button>
                </div>
                <div className="fourthright">
                    <div className="pyprog"></div>
                </div>
            </div>

            {/* sql */}

            <div className="fifth">
                <div className="fifthleft">
                    <h1>SQL</h1>
                    <p>The language for accessing databases</p>
                    <button className="learnsql">Learn SQL</button>
                    <br />
                    <button className="refsql">SQL Reference</button>
                </div>
                <div className="fifthright">
                    <div className="sqlprog"></div>
                </div>
            </div>
        </div>
    );
}
