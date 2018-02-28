import React from "react";
import "../../styles/universalStyles.css"
import "./createProfilePanel.css";


class CreateProfilePanel extends React.Component{
	render(){
		return(
			<div id="profile-wrapper">
                <h1>Tell Us About You</h1>

				<form action="" method="">
                    <div className="field-wrapper">
                        <input className="input-style" onChange={this.props.handleInputChange} type="text" placeholder="First Name" name="firstName"/>
                        <h6 className="error-style">{this.props.firstNameError}</h6>
                
                        <input className="input-style" onChange={this.props.handleInputChange} type="text" name="lastName" placeholder="Last Name" />
                        <h6 className="error-style">{this.props.lastNameError}</h6>

                        <input className="input-style" onChange={this.props.handleInputChange} type="date" name="birthday" placeholder="MM-DD-YYYY" pattern="[0-9]{2}" />
                        <h6 className="error-style">{this.props.birthdayError}</h6>


                        <textarea className="input-style" onChange={this.props.handleInputChange} placeholder="Make yourself stand out..." name="bio" rows="5"></textarea>
                        <h6 className="error-style">{this.props.bioError}</h6>

                    </div>
    
                    {/* <input type="file" name="" id=""/>  THIS MAY BE USEFUL FOR AVATAR */}
		
                    <p className="gdrop">I am a 
 						<select name="gender" onChange={this.props.handleInputChange}>
                            <option value="man">man</option>
 							<option value="woman">woman</option>
 						</select>
                    </p>
					

                    <p className="gdrop">I have 
						<select name="pets" onChange={this.props.handleInputChange}>
							<option value="None">no pets</option>
							<option value="Cat">cat(s)</option>
							<option value="Dog">dog(s)</option>
							<option value="Both">both cat(s) and dog(s)</option>
							<option value="Other">other pets</option>
						</select>
					</p>


                    <p className="gdrop">I 
                        <select name="smokes" onChange={this.props.handleInputChange}>
                            <option value={false}>do not smoke</option>
                            <option value={true}>do smoke</option>
                        </select>
                    </p>

                    <p className="gdrop">I can afford a rent of 
                        <select name="rent" onChange={this.props.handleInputChange}>
                            <option value={1000}>1000</option>
                            <option value={2000}>2000</option>
                            <option value={3000}>3000</option>
                            <option value={4000}>4000</option>
                            <option value={5000}>5000</option>
                        </select>
                    </p>


					<button onClick={this.props.clicky}>Test</button>

				</form>

			</div>
		)
	}
}

export default CreateProfilePanel