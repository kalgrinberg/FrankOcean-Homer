/*import React from "react";*/
import HomerLogo from "../images/Homer_Logo.png";
import "./topnav.css";
import "../../styles.css";


function Topnav() {

    return (
        <div className="TopNavContainer">


            <img className="homerlogo" src={HomerLogo} />


            <div className="navbuttons">
                <div className="topnavbutton">Menu</div>
                <div className="topnavbutton">Search</div>
                <div className="topnavbutton">Cart</div>

            </div>


        </div>
    );
}

export default Topnav;