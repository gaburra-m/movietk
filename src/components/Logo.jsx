import React from 'react'
import logo from "../logo.svg";

function Logo() {
return (
    <div className="logo">
        <a href="/"><img src={logo} className="logo__img" alt="logo movieTK" href="./" /></a>
        <a href="/" className="logo__txt"><h1 >movieTK</h1></a>
        </div>
)
}

export default Logo