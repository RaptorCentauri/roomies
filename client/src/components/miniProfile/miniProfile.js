import React from "react";
import "./miniProfile.css"


class Miniprofile extends React.Component{
	render(){
		return(
			<div className="mini-profile-box">
				<div className="avatar-box">
					<div className="avatar-top">
						<div className="avatar-frame">
							{/* {this.props.avatar} */}
						</div>
					</div>

					<div className="avatar-bottom">
						<h4>{this.props.firstname}</h4>
					</div>
				</div>
				<div className="wrapper">
					<div className="mini-info">
						<h4>Rent Limit ${this.props.rent}</h4>
						{(this.props.pets) ? <h4>Has {this.props.pets}</h4> : <h4>Does Not Have Pets</h4>}
						{(this.props.smokes) ? <h4>Is A Smoker</h4> : <h4>Is Not A Smoker</h4>}

					</div>
					<div className="mini-bio">
						<h6>{this.props.bio}</h6>
					</div>
				</div>
			</div>
		)
	}
}

export default Miniprofile;



