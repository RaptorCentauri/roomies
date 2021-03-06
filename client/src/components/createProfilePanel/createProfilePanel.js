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
        return <select name="rent" onChange={this.props.handleInputChange} id="create-profile-select">{rentOptions}</select>
    }

	render(){
		return(
			<div id="profile-wrapper">
                <div id="profile-avatar-upload">
                    <label htmlFor="avatar-upload-input" id="avatar-upload-label"><img src="/assets/images/ui-elements/avatarUploadPlaceholder.png" alt="upload avatar" /></label>
                    <input type="file" onChange={this.props.handleUploadImage} name="avatar" id="avatar-upload-input" accept="image/*" />
                </div>


                
				<form action="" method="">

   
            <div id="input-fields-bounder">
                    <div className="field-wrapper">
                        <input className="input-style" onChange={this.props.handleInputChange} type="text" placeholder="First Name" name="firstName"/>
                        <h6 className="error-style">{this.props.firstNameError}</h6>
                
                        <input className="input-style" onChange={this.props.handleInputChange} type="text" name="lastName" placeholder="Last Name" />
                        <h6 className="error-style">{this.props.lastNameError}</h6>

                        <textarea className="input-style" onChange={this.props.handleInputChange} placeholder="Make yourself stand out..." name="bio" rows="5"></textarea>
                        <h6 className="error-style">{this.props.bioError}</h6>
                    </div>
            </div>
    
                <div id="profile-select-bounder">

                        <select name="gender" onChange={this.props.handleInputChange} id="create-profile-select">
                            <option value="man">I am a man</option>
 							<option value="woman">I am a woman</option>
 						</select>					

                        <select name="pets" onChange={this.props.handleInputChange} id="create-profile-select">
							<option value="none">I do not have pets</option>
							<option value="cat">I have cat(s)</option>
							<option value="dog">I have dog(s)</option>
                            <option value="both">I have cat(s) and dog(s)</option>
						</select>

                        <select name="smokes" onChange={this.props.handleInputChange} id="create-profile-select">
                            <option value={false}>I am not a smoker</option>
                            <option value={true}>I am a smoker</option>
                        </select>

                        {this.rentSelect()}
                </div>


                    <div id="create-profile-button-row">
                        <button onClick={this.props.handleClick} id="create-profile-button">Create My Profile</button>
                    </div>


				</form>

			</div>
		)
	}
}

export default CreateProfilePanel