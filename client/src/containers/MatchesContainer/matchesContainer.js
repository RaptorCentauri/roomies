import React from "react";
import Miniprofile from "../../components/miniProfile/miniProfile.js"
import Topbar from "../../components/topBar/topBar.js"
import "./matchesContainer.css"
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { changeProfile, changeSearchParams } from "../../actions/index.js"

//IMPORTANT FOR REDUX=======================================================
//============================================================================

let mapStateToProps = (state) => {
    return {
        profile: state.profile,
        searchParams: state.searchParams,
        matches: state.matches
    };
}

let matchDispatchtoProps = (dispatch) => {
    return bindActionCreators({
        changeProfile: changeProfile,
        changeSearchParams: changeSearchParams

    }, dispatch)
}
//============================================================================
//============================================================================



class MatchesPage extends React.Component {
		render() {
				return (
						<div>
								<Topbar gender={this.props.searchParams.gender}/>
									<h1 id="header">We Think You'll get along great!</h1>

							<div id="matches-wrapper">
                            {console.log("RAINBODY BRIDGE " + this.props.matches)}
                            {/* {console.log(props.matches)} */}

								{this.props.matches.matches.map(i => 
                                    <Miniprofile key={i.id}
                                                firstname={i.firstName}
                                                rent={i.rent}
                                                pets={i.pets}
                                                smokes={i.smokes}
                                />)}
						</div>


                        {/* {images.map(i => <Card
                            key={i.id}
                            name={i.image}
                            wasClicked={this.state.clicked[i.id] ? true : false}
                            handleCardClick={() => { this.handleCardClick(i.id) }}
                            image={`/assets/Images/${i.image}`}
                            newgame={this.state.newgame}
                        />)} */}







				
						</div>
				)
		}
}

export default connect(mapStateToProps, matchDispatchtoProps)(MatchesPage);




