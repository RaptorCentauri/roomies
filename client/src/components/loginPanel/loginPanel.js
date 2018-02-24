import React from "react";
import "./loginPanel.css";

const LoginPanel = () => 
    <div id="login-panel">
        <div id="wrapper">

            <form action="" method="get">
                <div id="input-fields-box">
                    <input type="email" name="" value="e-mail" className="input-field"/>
                    <input type="password" value="password" name="" className="input-field"/>
                </div>
                <div id="login-button-row">
                    <button type="submit">Login</button>
                    {/* <button type="submit">Login</button> */}
                </div>
            </form>



        </div>





    </div>

export default LoginPanel;


