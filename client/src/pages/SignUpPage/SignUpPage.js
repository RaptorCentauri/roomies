import React from "react"
import CreateProfilePanel from "../../components/createProfilePanel/createProfilePanel.js"
import CreateAccountPanel from "../../components/createAccountPanel/createAccountPanel.jsx"

import API from "../../util/API.js";
// import Helpers from "../../util/Helpers.js";

class SignUpPage extends React.Component{
    state = {
        toggleLabel: "SHOW",
        passwordType: "password",
        accountWasMade: false,
        account:{
            email: null,
            password: null,
        },
        accountErrors:{
            emailError:null,
            passwordError: null,
            repeatPasswordError: null,
        },
        profile: {
            firstName: null,
            lastName: null,
            bio: null,
            // birthday: null,
            gender: "man",
            pets: "none",
            smokes: false,
            rent: 500,
        },
        profileErrors: {
            firstNameError: null,
            lastNameError: null,
            bioError: null
            // birthdayError: null,
        }
    };


    handleClick = (e) => {
        e.preventDefault();

        //Click for account creation
        if (!this.state.accountWasMade) {
            if (!this.validate()) {
                console.log("good");
                API.createNewUser(this.state.account)
                    .then((msg) => { if(msg){
                        this.setState({ accountWasMade: true });
                    }
                });
            }
        }
        //Click for profile creation
        else{
            if (!this.validate()) {
                console.log(this.state.profile);
                //WE WILL SEND THE USER PROFILE TO THE DB
            }
        }
    };

    toggleVisible = (e) => {
        e.preventDefault()
        if(this.state.passwordType === "password"){
            this.setState({ passwordType: "text" });
            this.setState({ toggleLabel: "HIDE" });
        }
        else{
            this.setState({ passwordType: "password" });
            this.setState({ toggleLabel: "SHOW" });
        }
    }

	validate = () => {
        let isError = false;
        
        //ERROR CHECK FOR ACCOUNT CREATION
        if (!this.state.accountWasMade) {
            let errors = {
                emailError: "",
                passwordError: ""
            };

            //Check for email
            if (!this.state.account.email) {
                isError = true;
                errors.emailError = "Please enter an email";
            }
            //Check for password
            if (!this.state.account.password) {
                isError = true;
                errors.passwordError = "Please enter a password";
            }

            if (isError) {
                this.setState({ ...this.state.account, accountErrors: { ...this.state.accountErrors, ...errors } });
            }
        }

        //ERROR CHECK FOR PROFILE CREATION
        else {

            let errors = {
                firstNameError: "",
                lastNameError: "",
                birthdayError: "",
                bioError: "",
            };

            //Check for First Name Errors
            if (!this.state.profile.firstName) {
                isError = true;
                errors.firstNameError = "Please enter you first name.";
            }
            else if (this.state.profile.firstName.match(/\d/)) {
                isError = true;
                errors.firstNameError = "First name cannot contain numbers.";
            }

            //Check for Last Name Errors
            if (!this.state.profile.lastName) {
                isError = true;
                errors.lastNameError = "Please enter you last name.";
            }
            else if (this.state.profile.lastName.match(/\d/)) {
                isError = true;
                errors.lastNameError = "Last name cannot contain numbers";
            }

            if (!this.state.profile.bio) {
                isError = true;
                errors.bioError = "A short bio is required";
            }

            if (isError) {
                this.setState({ ...this.state.profile, profileErrors: { ...this.state.profileErrors, ...errors } });
            }
        }

		return isError;
	}

    handleInputChange = (e) =>{
        const target = e.target;
        const value = target.value;
		const name = target.name;

        if(!this.state.accountWasMade){
            this.setState({ account: { ...this.state.account, [name]: value } });
        }
        else{
            this.setState({ profile: { ...this.state.profile, [name]: value } });
        }
    }

    render(){
        return(
            <div>
                {!this.state.accountWasMade ? <CreateAccountPanel 
                                                createUser={this.handleClick} 
                                                handleInputChange={this.handleInputChange}
                                        emailError={this.state.accountErrors.emailError}
                                        passwordType={this.state.passwordType}
                                        toggleVisible={this.toggleVisible}
                                        toggleLabel={this.state.toggleLabel}
                                        repeatPasswordError={this.state.accountErrors.repeatPasswordError}
                                        passwordError={this.state.accountErrors.passwordError} /> :

                    <CreateProfilePanel clicky={this.handleClick}
                        firstNameError={this.state.profileErrors.firstNameError}
                        lastNameError={this.state.profileErrors.lastNameError}
                        birthdayError={this.state.profileErrors.birthdayError}
                        bioError={this.state.profileErrors.bioError}
                        handleInputChange={this.handleInputChange} />
            }
            </div>
        )
    }
}

export default SignUpPage;