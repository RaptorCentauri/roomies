import React from "react";
import "./createAccountPanel.css"


const CreateAccountPanel = (props) =>{
    return(
        <div id="create-account-panel">
            <div id="wrapper">
                <form action="" method="get">
                    <div id="input-fields-box">
                        <input onChange={props.handleInputChange} type="email" name="email" placeholder="email" className="input-field" />
                        <h6 className="error-style">{props.emailError}</h6>
                        <input onChange={props.handleInputChange} type="password" name="password" placeholder="password" className="input-field" />
                        {/* <h6 className="error-style">{props.passwordError}</h6> */}
                    </div>

                    <div id="create-account-panel-button-row">
                        <button onClick={props.handleClick} type="submit">Create Account</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateAccountPanel;