import React from "react";

export default function W3schoolscontent() {
    return (
        <div className="content">
            {/* html */}

            <div className="first">
                <div className="leftfirst">
                    <h1>HTML</h1>
                    <p>The language for building web pages</p>
                    <a
                        className="learnhtml"
                        href="https://www.w3schools.com/html/default.asp"
                    >
                        Learn HTML
                    </a>
                    <br />
                    <a
                        className="refhtml"
                        href="https://www.w3schools.com/tags/default.asp"
                    >
                        HTML Reference
                    </a>
                </div>
                <div className="rightfirst">
                    <div className="htmlprog">
                        <h1 className="programheading">HTML Example:</h1>
                        <div className="example"></div>
                        <a
                            className="try"
                            href="https://www.w3schools.com/html/tryit.asp?filename=tryhtml_default"
                        >
                            Try Yourself
                        </a>
                    </div>
                </div>
            </div>

            {/* css */}

            <div className="second">
                <div className="secondleft">
                    <h1>CSS</h1>
                    <p>The language for styling web pages</p>
                    <a
                        className="learncss"
                        href="https://www.w3schools.com/css/default.asp"
                    >
                        Learn CSS
                    </a>
                    <br />
                    <a
                        className="refcss"
                        href="https://www.w3schools.com/cssref/default.asp"
                    >
                        CSS Reference
                    </a>
                </div>
                <div className="secondright">
                    <div className="cssprog">
                        <h1 className="programheading">CSS Example:</h1>
                        <div className="example"></div>
                        <a
                            className="try"
                            href="https://www.w3schools.com/css/tryit.asp?filename=trycss_default"
                        >
                            Try Yourself
                        </a>
                    </div>
                </div>
            </div>

            {/* javascript */}

            <div className="third">
                <div className="thirdleft">
                    <h1>Javascript</h1>
                    <p>The language for programming web pages</p>
                    <a
                        className="learnjs"
                        href="https://www.w3schools.com/js/default.asp"
                    >
                        Learn Javascript
                    </a>
                    <br />
                    <a
                        className="refjs"
                        href="https://www.w3schools.com/jsref/default.asp"
                    >
                        Javascript Reference
                    </a>
                </div>
                <div className="thirdright">
                    <div className="jsprog">
                        <h1 className="programheading">Javascript Example:</h1>
                        <div className="example"></div>
                        <a
                            className="try"
                            href="https://www.w3schools.com/js/tryit.asp?filename=tryjs_default"
                        >
                            Try Yourself
                        </a>
                    </div>
                </div>
            </div>

            {/* python */}

            <div className="fourth">
                <div className="fourthleft">
                    <h1>PYTHON</h1>
                    <p>The popular programming language</p>
                    <a
                        className="learnpy"
                        href="https://www.w3schools.com/python/default.asp"
                    >
                        Learn Python
                    </a>
                    <br />
                    <a
                        className="refpy"
                        href="https://www.w3schools.com/python/python_reference.asp"
                    >
                        Python Reference
                    </a>
                </div>
                <div className="fourthright">
                    <div className="pyprog">
                        <h1 className="programheading">Python Example:</h1>
                        <div className="example"></div>
                        <a
                            className="try"
                            href="https://www.w3schools.com/python/trypython.asp?filename=demo_indentation"
                        >
                            Try Yourself
                        </a>
                    </div>
                </div>
            </div>

            {/* sql */}

            <div className="fifth">
                <div className="fifthleft">
                    <h1>SQL</h1>
                    <p>The language for accessing databases</p>
                    <a
                        className="learnsql"
                        href="https://www.w3schools.com/sql/default.asp"
                    >
                        Learn SQL
                    </a>
                    <br />
                    <a
                        className="refsql"
                        href="https://www.w3schools.com/sql/sql_ref_keywords.asp"
                    >
                        SQL Reference
                    </a>
                </div>
                <div className="fifthright">
                    <div className="sqlprog">
                        <h1 className="programheading">SQL Example:</h1>
                        <div className="example"></div>
                        <a
                            className="try"
                            href="https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_where"
                        >
                            Try Yourself
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
