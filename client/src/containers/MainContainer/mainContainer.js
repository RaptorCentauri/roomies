import React from "react";
import LoginPanel from "../../components/loginPanel/loginPanel.js"
import SignUpContainer from "../../containers/SignUpContainer/SignUpContainer.js"
import MatchesContainer from "../../containers/MatchesContainer/matchesContainer.js";

import "./mainContainer.css"
import API from "../../util/API.js";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { changeCredentials, changeUserIsLoggedIn, changeAccountWasCreated} from "../../actions/index.js"


let mapStateToProps = (state) => {
    return {
        credentials: state.credentials,
        userIsLoggedIn: state.userIsLoggedIn,
        accountWasCreated: state.accountWasCreated
    };
}

let matchDispatchtoProps = (dispatch) => {
    return bindActionCreators({ 
        changeCredentials: changeCredentials, 
        changeUserIsLoggedIn: changeUserIsLoggedIn,
        changeAccountWasCreated: changeAccountWasCreated

     }, dispatch)
}


class MainContainer extends React.Component{

    loginPanelIsVisible = () => {
        return(
            <LoginPanel handleInputChange={this.handleInputChange} loginUser={this.handleLoginClick} signUp={this.handleSignUpClick}/>
        )
    }


    signUpContainerIsVisible =() => {
        return(
            <SignUpContainer />
        )
    }

    matchesContainerIsVisible = () => {
        return(
            <MatchesContainer />
        )
    }

    handleInputChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        console.log(name);

        this.props.changeCredentials(name, value)
    } 

    handleLoginClick = (e) => {
        e.preventDefault();
            
        API.validateLogin(this.props.credentials)
            .then((res) => {                
                if (res) {
                    this.props.changeUserIsLoggedIn(true)
                    this.props.changeAccountWasCreated(true)
                }
            });
    }


    handleSignUpClick = (e) => {
        e.preventDefault();
        this.props.changeUserIsLoggedIn(true);
    }
    


	render(){
		return(
            // <SignUpContainer />

            // <div>{!this.props.userIsLoggedIn.success ? this.loginPanelIsVisible() :  this.matchesContainerIsVisible()}</div>


            <div>{!this.props.userIsLoggedIn.success ? this.loginPanelIsVisible() : !this.props.accountWasCreated.success ? this.signUpContainerIsVisible() : this.matchesContainerIsVisible()}</div>
		)
	}
}


export default connect(mapStateToProps, matchDispatchtoProps)(MainContainer);