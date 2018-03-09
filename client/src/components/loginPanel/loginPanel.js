import React from "react";
import "./loginPanel.css";

const LoginPanel = (props) =>{
    return(
        <div id="login-panel">
            <div id="wrapper">
                <form action="" method="">
                    <div id="input-fields-box">
                        <input onChange={props.handleInputChange} type="email" name="email" placeholder="email" className="input-field" />
                        <input onChange={props.handleInputChange} type="password" name="password" placeholder="password" className="input-field" />
                    </div>

                    <div id="login-button-row">
                        <button onClick={props.signUp} type="submit">Sign Up</button>
                        <button onClick={props.loginUser} type="submit">Login</button>
                    </div>
                </form>
                
            </div>
        </div>
    )
}


export default LoginPanel;