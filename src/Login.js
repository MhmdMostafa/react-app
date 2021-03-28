import React from "react";


export default function Login() {
    return (
        <div>
            <h1>Login</h1>
            <form>
                <input type="text" placeholder="UserName"></input>
                <input type="password" placeholder="Password"></input>
                <button className="btn" type="submit"></button>
            </form>
        </div>
    )
}