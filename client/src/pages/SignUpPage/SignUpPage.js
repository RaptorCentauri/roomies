import React from "react"
import CreateProfilePanel from "../../components/createProfilePanel/createProfilePanel.js"
import API from "../../util/API.js";
// import Helpers from "../../util/Helpers.js";

class SignUpPage extends React.Component{
    state = {
        profile: {
            firstName: null,
            lastName: null,
            birthday: null,
            gender: null,
            pets: null,
            smokes: false,
            rent: null,
            bio: null
        },

        profileErrors: {
            firstNameError: null,
            lastNameError: null,
            birthdayError: null,
        }
    };

	validate = () => {
		let isError = false;

		const errors = {
			firstNameError: "",
			lastNameError: "",
            birthdayError: "",
            bioError:"",
		};

        //Check for First Name Errors
		if (!this.state.profile.firstName) {
			isError = true;
			errors.firstNameError = "Please Enter a First Name";	
		}
		else if(this.state.profile.firstName.match(/\d/)){
			isError = true;
			console.log("has numbers");
			errors.firstNameError = "First Name Cannont have number";	
		}

        //Check for Last Name Errors
		if (!this.state.profile.lastName) {
			isError = true;
			errors.lastNameError = "Please Enter a Last Name";
		}
		else if (this.state.profile.lastName.match(/\d/)) {
			isError = true;
			console.log("has numbers");
			errors.lastNameError = "First Name Cannont have number";
        }
        
        //Check for Birthday Errors
		if (!this.state.profile.birthday) {
			isError = true;
			errors.birthdayError = "Please Enter a  Birthday";
		}
		// else if (!this.state.profile.birthday.match(/[0-9]{2}\/[0-9]{2}\/[0-9]{4}/)) {
		// 	isError = true;
		// 	console.log("bday error");
		// 	errors.birthdayError = "Wrong Bday format";
        // }
        

        if (!this.state.profile.bio) {
            isError = true;
            errors.bioError = "Please Fill in the about me";
        }


		if (isError){
			this.setState({ ...this.state.profile, profileErrors: { ...this.state.profileErrors, ...errors } });
			console.log(errors);
		}
		
		return isError;
	}

    handleInputChange = (event) =>{
        const target = event.target;
        const value = target.value;
		const name = target.name;
		
		this.setState({ profile: { ...this.state.profile, [name]: value } });
    }

    handleClick = (event) => {
		event.preventDefault();
		
		if (!this.validate()){
            console.log("form OK");
            console.log(this.state.profile);
            
			API.setProfile(this.state.profile);
		}
		else{
			console.log("Form Bad");
		}
    };

    render(){
        return(
			<CreateProfilePanel clicky={this.handleClick}
			firstNameError={this.state.profileErrors.firstNameError}
			lastNameError={this.state.profileErrors.lastNameError}
            birthdayError={this.state.profileErrors.birthdayError} 
            bioError={this.state.profileErrors.bioError} 
			handleInputChange={this.handleInputChange} />
        )
    }
}

export default SignUpPage;