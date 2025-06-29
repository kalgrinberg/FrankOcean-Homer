import React from "react";
import HomerLogo from "../images/Homer_Logo.png";
import "./topnav.css";


function Topnav() {

    return (
        <div className="kalTopnav">
            
            <div className="logocontainer">
                <img className="homerlogo" src={HomerLogo} />
            </div>

        </div>

    );
}

export default Topnav;