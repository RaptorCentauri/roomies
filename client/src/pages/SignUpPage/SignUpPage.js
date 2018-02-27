import React from "react"
import CreateProfilePanel from "../../components/createProfilePanel/createProfilePanel.js"

class SignUpPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            firstName: "John",
            lastName: "Doe",
            birthday:"",
            gender: "man",
            pets: "none",
            smokes: false,
            rent: 1000
        };
    }


    handleInputChange = (event) =>{
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({[name]:value});
    }


    testClick = (event) => {
        event.preventDefault();
        console.log('Button was clicked');
        // this.setState({pets: "Puppy"});
        console.log(this.state);
    };

    render(){
        return(
            // <CreateProfilePanel clicky={this.testClick} changeFirstName={this.handleFirstNameChange} changeGender={this.handleGenderChange} changeSmoker={this.handleSmokerChange} changePets={this.handlePetsChange}/>
            <CreateProfilePanel clicky={this.testClick} gender={this.state.gender} handleInputChange={this.handleInputChange} />

        )
    }

}

export default SignUpPage;