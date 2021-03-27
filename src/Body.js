import React from "react";

function Body() {
    return <div>
        <div className="container">
            <div className="row align-items-start" id="first">
                <div className="col">One of three columns</div>
                <div className="col">One of three columns</div>
                <div className="col">One of three columns</div>
            </div>
            <div className="row align-items-center" id="second">
                <div className="col">One of three columns</div>
                <div className="col">One of three columns</div>
                <div className="col">One of three columns</div>
            </div>
            <div className="row align-items-end" id="therd">
                <div className="col">One of three columns</div>
                <div className="col">One of three columns</div>
                <div className="col">One of three columns</div>
            </div>
        </div>
    </div>
}

export default Body;