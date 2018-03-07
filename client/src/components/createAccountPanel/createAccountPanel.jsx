import React from "react";
import "./createAccountPanel.css"


const CreateAccountPanel = (props) =>{
    return(
        <div id="login-panel">
            <div id="wrapper">
                <form action="" method="get">
                    <div id="input-fields-box">
                        <input onChange={props.handleInputChange} type="email" name="email" placeholder="email" className="input-field" />
                        <br />
                        <h6 className="error-style">{props.emailError}</h6>

                        <br />
                        <br />
                        <br />

                        <input onChange={props.handleInputChange} type="password" name="password" placeholder="password" className="input-field" />
                        <br />
                        <h6 className="error-style">{props.passwordError}</h6>

                        <br />
                        <br />
                        <br />
                    </div>

                    <br />
                    <br />
                    <br />
                    <br />
                    <div id="login-button-row">

                        <button onClick={props.handleClick} type="submit">NEW USER</button>
                    </div>
                </form>
            </div>
        </div>
    )
}









export default CreateAccountPanel;