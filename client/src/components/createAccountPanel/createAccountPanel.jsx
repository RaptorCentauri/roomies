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
                            <input onChange={this.props.handleInputChange} type="password" name="password" placeholder="password" className="input-field" />
                        </div>
                        <div id="login-button-row">
                            {/* <button onClick={this.props.loginUser} type="submit">Login</button> */}

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