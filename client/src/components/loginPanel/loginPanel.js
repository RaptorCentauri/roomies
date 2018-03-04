import React from "react";
import "./loginPanel.css";

class LoginPanel extends React.Component{
    render(){
        return(
            <div id="login-panel">
                <div id="wrapper">
                    <form action="" method="get">
                        <div id="input-fields-box">
                            <input onChange={this.props.foo} type="email" name="email" placeholder="email" className="input-field" />
                            <input onChange={this.props.foo} type="password" name="password" placeholder="password" className="input-field" />
                        </div>
                        <div id="login-button-row">
                            <button onClick={this.props.loginBtn} type="submit">Login</button>
                            {/* <button type="submit">Login</button> */}
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default LoginPanel;