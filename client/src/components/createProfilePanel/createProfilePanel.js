import React from "react";
import "./createProfilePanel.css";


class CreateProfilePanel extends React.Component{
	render(){
		return(
			<div id="profile-create-panel">
				<form action="" method="">
					<input onChange={this.props.handleInputChange} type="text" name="firstName" id=""/>
					<input onChange={this.props.handleInputChange} type="text" name="lastName" id="" />
					{/* <input type="file" name="" id=""/>  THIS MAY BE USEFUL FOR AVATAR */}
					<input onChange={this.props.handleInputChange} type="date" name="birthday" placeholder="MM-DD-YYYY" pattern="[0-9]{2}" />

					<p>I am a
						<select name="gender" onChange={this.props.handleInputChange}>
							<option value="man">Man</option>
							<option value="woman">Woman</option>
						</select>
					</p>

					<p>I have
						<select name="pets" onChange={this.props.handleInputChange}>
							<option value="None">no pets</option>
							<option value="Cat">cat(s)</option>
							<option value="Dog">dog(s)</option>
							<option value="Both">both cat(s) and dog(s)</option>
							<option value="Other">other pets</option>
						</select>
					</p>

					<select name="smokes" onChange={this.props.handleInputChange}>
						<option value={false}>I do not Smoke</option>
						<option value={true}>I Smoke</option>
					</select>

					<select name="rent" onChange={this.props.handleInputChange}>
						<option value={1000}>1000</option>
						<option value={2000}>2000</option>
						<option value={3000}>3000</option>
						<option value={4000}>4000</option>
						<option value={5000}>5000</option>
					</select>

					{/* Bio  text field*/}
					<button onClick={this.props.clicky}>Test</button>

				</form>
			</div>
		)
	}
}

export default CreateProfilePanel