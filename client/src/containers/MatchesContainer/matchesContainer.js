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
								{
                                    <Miniprofile firstName={"bobb"}/>
								}
						</div>

				
						</div>
				)
		}
}

export default connect(mapStateToProps, matchDispatchtoProps)(MatchesPage);




