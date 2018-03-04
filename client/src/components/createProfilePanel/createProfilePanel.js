import React from "react";
import "../../styles/universalStyles.css"
import "./createProfilePanel.css";

class CreateProfilePanel extends React.Component{

    rentSelect = () => {
        let rent = [];
        for(let i=500; i<=3000; i+=250){
            rent.push(i)
        }
        let rentOptions = rent.map(function (i) {
            return <option value={i} key={i}>I can afford a rent of ${i}</option>;
        })
        return <select name="rent" onChange={this.props.handleInputChange}>{rentOptions}</select>
    }


	render(){
		return(
			<div id="profile-wrapper">
				<form action="" method="">
                    <div className="field-wrapper">

                        <h1>NEED TO ADD USER_AVATAR</h1>
                        <br/>

                        <input className="input-style" onChange={this.props.handleInputChange} type="text" placeholder="First Name" name="firstName"/>
                        <h6 className="error-style">{this.props.firstNameError}</h6>
                
                        <input className="input-style" onChange={this.props.handleInputChange} type="text" name="lastName" placeholder="Last Name" />
                        <h6 className="error-style">{this.props.lastNameError}</h6>

                        {/* <input className="input-style" onChange={this.props.handleInputChange} type="date" name="birthday" placeholder="MM-DD-YYYY" pattern="[0-9]{2}" /> */}
                        {/* <h6 className="error-style">{this.props.birthdayError}</h6> */}

                        <textarea className="input-style" onChange={this.props.handleInputChange} placeholder="Make yourself stand out..." name="bio" rows="5"></textarea>
                        <h6 className="error-style">{this.props.bioError}</h6>
                    </div>
    
		
 						<select name="gender" onChange={this.props.handleInputChange}>
                            <option value="man">I am a man</option>
 							<option value="woman">I am a woman</option>
 						</select>					

                        <br/>

						<select name="pets" onChange={this.props.handleInputChange}>
							<option value="none">I do not have pets</option>
							<option value="cat">I have cat(s)</option>
							<option value="dog">I have dog(s)</option>
                            <option value="both">I have cat(s) and dog(s)</option>
						</select>

                    <br />


                        <select name="smokes" onChange={this.props.handleInputChange}>
                            <option value={false}>I am not a smoker</option>
                            <option value={true}>I am a smoker</option>
                        </select>

                        <br/>

                        {this.rentSelect()}

                        <br/>

					<button onClick={this.props.clicky}>Test</button>

				</form>

			</div>
		)
	}
}

export default CreateProfilePanel