import React from "react";
import "./style.css";

function Navbar(){
    return(
        <nav className="navbar flex-column">
            <a className="navbar-brand text-center mt-3" href="/">Employee Directory</a>
        </nav>
    );
}

export default Navbar;