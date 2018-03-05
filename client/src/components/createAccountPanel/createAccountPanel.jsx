import React from "react";
import "./createAccountPanel.css"

class CreateAccountPanel extends React.Component {
    render() {
        return (
            <div id="login-panel">
                <div id="wrapper">
                    <form action="" method="get">
                        <div id="input-fields-box">
                            <input onChange={this.props.handleInputChange} type="email" name="email" placeholder="email" className="input-field" />
                            <br />
                            <h6 className="error-style">{this.props.emailError}</h6>

<br/>
                            <br />
                            <br />

                            <input onChange={this.props.handleInputChange} type={this.props.passwordType} name="password" placeholder="password" className="input-field"/>
                            <button onClick={this.props.toggleVisible}>{this.props.toggleLabel}</button>
                            <br />
                            <h6 className="error-style">{this.props.passwordError}</h6>

                            <br/>
                            <br />
                            <br />


                            {/* <input onChange={this.props.handleInputChange} type="password" name="repeatPassword" placeholder="enter password again" className="input-field" />
                            <br />
                            <h6 className="error-style">{this.props.repeatPasswordError}</h6> */}

                        </div>

                        <br />
                        <br />
                        <br />
                        <br />
                        <div id="login-button-row">

                  


                            {/* ONlY FOR TESTING!! */}
                            <button onClick={this.props.createUser} type="submit">NEW USER</button>
                            
                            {/* ONlY FOR TESTING!! */}

                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default CreateAccountPanel;