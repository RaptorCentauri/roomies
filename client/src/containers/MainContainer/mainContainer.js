import React from "react";
import LoginPanel from "../../components/loginPanel/loginPanel.js"
import SignUpContainer from "../../containers/SignUpContainer/SignUpContainer.js"
import MatchesContainer from "../../containers/MatchesContainer/matchesContainer.js";

import "./mainContainer.css"
import API from "../../util/API.js";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { changeCredentials, changeUserIsLoggedIn, changeAccountWasCreated, changeCreateNewUser} from "../../actions/index.js"


let mapStateToProps = (state) => {
    return {
        credentials: state.credentials,
        userIsLoggedIn: state.userIsLoggedIn,
        accountWasCreated: state.accountWasCreated,
        createNewUser: state.createNewUser
    };
}

let matchDispatchtoProps = (dispatch) => {
    return bindActionCreators({ 
        changeCredentials: changeCredentials, 
        changeUserIsLoggedIn: changeUserIsLoggedIn,
        changeAccountWasCreated: changeAccountWasCreated,
        changeCreateNewUser: changeCreateNewUser

     }, dispatch)
}


class MainContainer extends React.Component{

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
        this.props.changeCreateNewUser(true);
    }
    


    componentToRender = () => {
        let renderedComponent;

        if(!this.props.userIsLoggedIn.success && !this.props.createNewUser.success){
               renderedComponent = <LoginPanel handleInputChange={this.handleInputChange} loginUser={this.handleLoginClick} signUp={this.handleSignUpClick} />
        }

        if (this.props.createNewUser.success){
               renderedComponent = <SignUpContainer />
        }

        if(this.props.userIsLoggedIn.success){
              renderedComponent = <MatchesContainer />
        }
        
        return renderedComponent;
    }


	render(){
		return(
            <div>{this.componentToRender()}</div>
		)
	}
}


export default connect(mapStateToProps, matchDispatchtoProps)(MainContainer);