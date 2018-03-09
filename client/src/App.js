import React from 'react';
import MatchesPage from "./containers/MatchesContainer/matchesContainer.js"
import LoginPanel from "./components/loginPanel/loginPanel.js"
import CreateAccountPanel from "./components/createAccountPanel/createAccountPanel.jsx"
import CreateProfilePanel from "./components/createProfilePanel/createProfilePanel.js"
import SearchPanel from "./components/searchPanel/searchPanel.js"
import blobUtil from "blob-util";

import API from "./util/API.js";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {changeMatches, changeAccountWasCompletedSearchParams, changeCredentials, changeProfile, changeProfileErrors, changeNewAccount, changeNewAccountErrors, changeProfileWasCompleted, changeSearchParams, changeUserIsLoggedIn, changeAccountWasCompletedId, changeAccountWasCompletedStatus, changeAccountWasCompletedProfile } from "./actions/index.js"

import './App.css';
import { read } from 'fs';
// import matchesContainer from './containers/MatchesContainer/matchesContainer.js';

let mapStateToProps = (state) => {
    return {
        credentials: state.credentials,
        profile: state.profile,
        newAccount: state.newAccount,
        profileErrors: state.profileErrors,
        newAccountErrors: state.newAccountErrors,
        accountWasCompleted: state.accountWasCompleted,
        searchParams: state.searchParams,
        userIsLoggedIn: state.userIsLoggedIn,
        matches: state.matches
    };
}

let matchDispatchtoProps = (dispatch) => {
    return bindActionCreators({ changeCredentials, changeProfile, 
        changeProfileErrors, changeNewAccount, changeNewAccountErrors, 
        changeProfileWasCompleted, changeSearchParams, changeUserIsLoggedIn,
        changeAccountWasCompletedId, changeAccountWasCompletedStatus, changeAccountWasCompletedProfile,
        changeAccountWasCompletedSearchParams, changeMatches  }, dispatch)
}


class App extends React.Component{

    showPreviewImage = (pic) =>{
        let reader = new FileReader();
        let preview = document.querySelector('img');
        let file = pic;

        reader.addEventListener("load", function () {
            preview.src = reader.result;
        }, false);

        if (file) {
            reader.readAsDataURL(file);
        }
    }

    handleGetProfileClick = (e) => {
        e.preventDefault();
        // if (!this.validateProfile()) {
    
            let ProfileId = {id: this.props.accountWasCompleted.id}

        API.getUserProfile(ProfileId)
                .then((res) => {
                    if (res) {
                        console.log(res);
                        console.log(res.avatar);

                        
                        // this.props.changeAccountWasCompletedProfile(res);
                    }
                });
        }
    // }

    handleLoginClick = (e) => {
        e.preventDefault();
        
        API.validateLogin(this.props.credentials)
            .then((res) => {
                if (res.success) {
                    this.props.changeUserIsLoggedIn(res.id, res.success)
                    this.props.changeAccountWasCompletedId(res.id)
                    API.getMatches(this.props.userIsLoggedIn).then((data) => this.props.changeMatches(data))


                    //THESE ARE TEMPORARY! replace with DB call to get propper Data

                    this.props.changeAccountWasCompletedProfile(true);
                    this.props.changeAccountWasCompletedSearchParams(true);
                }
            });
    }

    handleSignUpClick = (e) => {
        e.preventDefault();
        this.props.changeAccountWasCompletedStatus("pending");
    }

    handleCreateAccountClick = (e) => {
        e.preventDefault();
        if (!this.validateNewAccount()) {

            API.createNewUser(this.props.newAccount)
                .then((res) => {
                    if (res.success) {
                        this.props.changeAccountWasCompletedId(res.id);
                    }
                });
        }
    }

    handleCreateProfileClick = (e) => {
        e.preventDefault();
        if (!this.validateProfile()) {
            let profileToUpdate= {
                profile: this.props.profile,
                id: this.props.accountWasCompleted.id
            }

            API.updateUserProfile(profileToUpdate)
                .then((res) => {
                    if (res) {
                        this.props.changeAccountWasCompletedProfile(res);
                    }
                });
        }
    }

    handleCreateSearchParamsClick = (e) => {
        e.preventDefault();

        let searchParamsToUpdate = {
            searchParams: this.props.searchParams,
            id: this.props.accountWasCompleted.id
        }


        API.updateUserSearchParams(searchParamsToUpdate)
            .then((res) => {
                if (res) {
                    API.getMatches(searchParamsToUpdate).then((data) => this.props.changeMatches(data))
                    // this.props.changeAccountWasCompletedSearchParams(true);
                }
            });
    }

    handleLoginInputChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.props.changeCredentials(name, value)
    } 

    handleUploadImage = (e) => {
        const target = e.target;
        // const value = target.files[0];
        const name = target.name;


        // blobUtil.blobToDataURL(target.files[0]).then(function (dataURL) {
        //     console.log("I want to see this");
        //     console.log(dataURL);
        //     console.log("I REALY WANN MAKE WOK");
            
        //     this.props.changeProfile(name, dataURL)
        // }).catch(function (err) {
        //     // error 
        // });
        

        this.props.changeProfile(name, target.files[0])

        this.showPreviewImage(target.files[0])
    } 

    handleSignUpInputChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.props.changeNewAccount(name, value)
    } 

    handleCreateProfileInputChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.props.changeProfile(name, value)
    } 

    handleCreateSearchParamsInputChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.props.changeSearchParams(name, value)
    } 

    validateNewAccount = () => {        
        let isError = false;

        let errors = {
            emailError: "",
            passwordError: ""
        };

        //Check for email
        if (!this.props.newAccount.email) {
            isError = true;
            errors.emailError = "Please enter an email";
        }
        //Check for password
        if (!this.props.newAccount.password) {
            isError = true;
            errors.passwordError = "Please enter a password";
        }

        if (isError) {
            this.props.changeNewAccountErrors(errors)
        }

        return isError;
    }

    validateProfile = () => {
        let isError = false;

        let errors = {
            firstNameError: "",
            lastNameError: "",
            birthdayError: "",
            bioError: "",
        };

        //Check for First Name Errors
        if (!this.props.profile.firstName) {
            isError = true;
            errors.firstNameError = "Please enter you first name.";
        }
        else if (this.props.profile.firstName.match(/\d/)) {
            isError = true;
            errors.firstNameError = "First name cannot contain numbers.";
        }

        //Check for Last Name Errors
        if (!this.props.profile.lastName) {
            isError = true;
            errors.lastNameError = "Please enter you last name.";
        }
        else if (this.props.profile.lastName.match(/\d/)) {
            isError = true;
            errors.lastNameError = "Last name cannot contain numbers";
        }

        if (!this.props.profile.bio) {
            isError = true;
            errors.bioError = "A short bio is required";
        }

        if (isError) {
            this.props.changeProfileErrors(errors)
        }

        return isError;
    }

    componentToRender = (bool, obj, matches) => {
        let toRender;

        if(!bool){
            toRender = <LoginPanel loginUser={this.handleLoginClick} signUp={this.handleSignUpClick} handleInputChange={this.handleLoginInputChange} />
        }

        if (obj.status === "pending") {
            toRender = <CreateAccountPanel handleClick={this.handleCreateAccountClick} handleInputChange={this.handleSignUpInputChange}
                emailError={this.props.newAccountErrors.emailError} passwordError={this.props.newAccountErrors.passwordError}/>
        }

        if (obj.status === "pending" && obj.id) {
            toRender = <CreateProfilePanel 
                avatar={this.props.profile.avatar}
                handleClick={this.handleCreateProfileClick} 
                handleInputChange={this.handleCreateProfileInputChange}
                handleUploadImage = {this.handleUploadImage}
                firstNameError={this.props.profileErrors.firstNameError}
                lastNameError={this.props.profileErrors.lastNameError}
                birthdayError={this.props.profileErrors.birthdayError}
                bioError={this.props.profileErrors.bioError}
            />
        }

        if (obj.status === "pending" && obj.id && obj.profile) {
            toRender = <SearchPanel testGetProfClick={this.handleGetProfileClick} handleClick={this.handleCreateSearchParamsClick} handleInputChange={this.handleCreateSearchParamsInputChange} gender={this.props.searchParams.gender}/>
        }

        if(matches != null){            
            toRender = <MatchesPage />
        }
        return toRender;
    }

    render(){
        return(
            <div>
                {/* <CreateProfilePanel /> */}
                {this.componentToRender(this.props.userIsLoggedIn.success, this.props.accountWasCompleted, this.props.matches.matches)}
            </div>
        )
    }
}


export default connect(mapStateToProps, matchDispatchtoProps)(App);