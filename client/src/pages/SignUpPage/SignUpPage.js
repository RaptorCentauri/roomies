import React from "react"
import CreateProfilePanel from "../../components/createProfilePanel/createProfilePanel.js"
import CreateAccountPanel from "../../components/createAccountPanel/createAccountPanel.jsx"

// import API from "../../util/API.js";
// import Helpers from "../../util/Helpers.js";

class SignUpPage extends React.Component{
    state = {
        accountWasMade: false,
        account:{
            email: null,
            password: null,

        },
        accountErrors:{
            emailError:null,
            passwordError: null
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


    // createUser = (e) => {
    //     e.preventDefault();
    //     API.createNewUser(this.state.credentials);
    // }


    handleClick = (e) => {
        e.preventDefault();

        if (!this.validate()){            
            console.log("good");
            this.setState({ accountWasMade: true });
        }
        else{
            console.log("bad")
        }  
             
        // this.setState({accountWasMade:true});
    };


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
            if (!this.state.account.email) {
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


    // handleClick = (e) => {
	// 	e.preventDefault();
		
	// 	if (!this.validate()){            
    //         API.setProfile(this.state.profile);
    //         console.log(this.state.profile);
    //     }    
    // };

    render(){
        return(
            <div>
                {!this.state.accountWasMade ? <CreateAccountPanel createUser={this.handleClick} 
                handleInputChange={this.handleInputChange}/> :

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