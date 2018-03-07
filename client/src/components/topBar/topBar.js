import React from "react";
import "./topBar.css"

const Topbar = (props) => {
    return (
        <div id="topbar-wrapper">
            <h2>Showing {props.gender == "both" ? "men and women" : props.gender == "man" ? "man" : "woman"}</h2>
        </div>
    )
}

export default Topbar;
