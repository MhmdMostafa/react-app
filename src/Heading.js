import React from "react";

// const el = document.getElementById("jump_to_this_location").scrollIntoView({ behavior: 'smooth' });

function move_to() {
    console.log("el");
}

function Heading() {
    return <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">
                <img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt=""></img> Bootstrap
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <button className="btn btn-outline-success my-2 my-lg-0" onClick={console.log("hello")}>Home</button>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Our services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Who are we</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">sponsors</a>
                    </li>
                </ul>
            </div>
            <button className="btn btn-outline-success my-2 my-lg-0" type="submit">Search</button>
        </nav>
    </div >
}
export default Heading;