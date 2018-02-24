import React from "react";
import LoginPanel from "../../components/loginPanel/loginPanel.js"
import "./loginPage.css"
import API from "../../util/API.js";







class LoginPage extends React.Component{
    state={
        name:"",
        species:"",
        color:""   
    }

    componentDidMount() {
        this.sampleLoad();
    }


    sampleLoad = () =>{
        API.getAll()
            // .then(res => console.log(res.data.name));

            .then(res => this.setState({name: res.data.name, species: res.data.species, color: res.data.color }))
    }

	render(){
		return(
			<div id="login-wrapper">
				<h1 id="login-header">Welcome to Roomies!</h1>
				<LoginPanel/>
                <h1>{this.state.name}</h1>
                <h1>{this.state.color}</h1>
                <h1>{this.state.species}</h1>

			</div>
		)
	}
}

export default LoginPage;