import React from "react";
import LoginPanel from "../../components/loginPanel/loginPanel.js"
import "./loginPage.css"
import API from "../../util/API.js";

class LoginPage extends React.Component{
    state={
        credentials:{
            email: null,
            password: null,
        }
    }

    handleInputChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({ credentials: { ...this.state.credentials, [name]: value } });
    }

    handleLoginClick = (e) => {
		e.preventDefault();
		API.validateLogin(this.state.credentials)
    }

    createUser = (e) => {
        e.preventDefault();
        API.createNewUser(this.state.credentials);
    }

	render(){
		return(
			<div id="login-wrapper">
				<h1 id="login-header">Welcome to Roomies!</h1>
                <LoginPanel handleInputChange={this.handleInputChange}
                createUser={this.createUser}                
                loginUser={this.handleLoginClick} />
			</div>
		)
	}
}
export default LoginPage;