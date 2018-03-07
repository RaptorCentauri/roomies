import React from "react"
import CreateProfilePanel from "../../components/createProfilePanel/createProfilePanel.js"
import CreateAccountPanel from "../../components/createAccountPanel/createAccountPanel.jsx"
import SearchPanel from "../../components/searchPanel/searchPanel.js"
import API from "../../util/API.js";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { changeProfile, changeProfileErrors, changeNewAccount, changeNewAccountErrors, changeAccountWasCreated, changeProfileWasCompleted, changeSearchParams } from "../../actions/index.js"

//IMPORTANT FOR REDUX=======================================================
//============================================================================

let mapStateToProps = (state) => {
    return {
        profile: state.profile,
        newAccount: state.newAccount,
        profileErrors: state.profileErrors,
        newAccountErrors: state.newAccountErrors,
        accountWasCreated: state.accountWasCreated,
        searchParams: state.searchParams,
        profileWasCompleted: state.profileWasCompleted
    };
}

let matchDispatchtoProps = (dispatch) => {
    return bindActionCreators({ 
        changeProfile: changeProfile, 
        changeProfileErrors: changeProfileErrors,
        changeNewAccount: changeNewAccount,
        changeNewAccountErrors: changeNewAccountErrors,
        changeAccountWasCreated: changeAccountWasCreated,
        changeProfileWasCompleted: changeProfileWasCompleted,
        changeSearchParams: changeSearchParams

    }, dispatch)
}
//============================================================================
//============================================================================


class SignUpPage extends React.Component{




    //============================================================================
    // This Container conditially renders components based on state. 
    // We wrap each compnonet in a function, and the call said function when we
    // need to render the component. Doing this allows us to keep a much cleaner 
    // retrun statement for our Class
    //============================================================================
    createAccountIsVisible = () => {
        return (
            <CreateAccountPanel
                handleClick={this.handleClick}
                handleInputChange={this.handleInputChange}
                emailError={this.props.newAccountErrors.emailError}
                passwordError={this.props.newAccountErrors.passwordError}
            />
        )
    }

    createProfileIsVisible = () => {
        return (
            <CreateProfilePanel clicky={this.handleClick}
                firstNameError={this.props.profileErrors.firstNameError}
                lastNameError={this.props.profileErrors.lastNameError}
                birthdayError={this.props.profileErrors.birthdayError}
                bioError={this.props.profileErrors.bioError}
                handleInputChange={this.handleInputChange}
                uploadClick={this.uploadClick}
            />
        )
    }

    searchPanelIsVisible = () => {
        return(
            <SearchPanel clickBtn={this.testClick} gender={this.props.searchParams.gender} handleInputChange={this.handleInputChange}/>
        )
    }


    uploadClick = (e) =>{
     
        console.log(e.target.files[0].name)    
        console.log(e.target.files[0]);
        console.log(e.target.files);

            
        
         

    }

    //Event Listeners
    handleClick = (e) => {
        e.preventDefault();

        if (!this.props.accountWasCreated.success) {
            if (!this.validate()) {
                API.createNewUser(this.props.newAccount)
                    .then((res) => { if(res){
                        this.props.changeAccountWasCreated(true)
                    }
                });
            }
        }
        // Click for profile creation
        else if(!this.props.profileWasCompleted.success){
            if (!this.validate()) {
                //WE WILL SEND THE USER PROFILE TO THE DB and call the next function upon success
                this.props.changeProfileWasCompleted(true)
            }
        }
        else{


        }
    };

    handleInputChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        !this.props.accountWasCreated.success ? this.props.changeNewAccount(name, value) : !this.props.profileWasCompleted.success ? this.props.changeProfile(name, value) : this.props.changeSearchParams(name, value)
    }


    //Validators
    validate = () => {
        let isError = false;

        //ERROR CHECK FOR ACCOUNT CREATION
        if (!this.props.accountWasCreated.success) {
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
        }

        return isError;
    }

    render = () => <div>{!this.props.accountWasCreated.success ? this.createAccountIsVisible() : !this.props.profileWasCompleted.success ? this.createProfileIsVisible() : this.searchPanelIsVisible()}</div>
}

export default connect(mapStateToProps, matchDispatchtoProps)(SignUpPage);



