import React from "react";
import Miniprofile from "../../components/miniProfile/miniProfile.js"
import Topbar from "../../components/topBar/topBar.js"
import "./matchesPage.css"



class MatchesPage extends React.Component {

    state = {
        tempData: [{ "firstname": "Greg", "rent": 500, "pets": "Dogs", "smokes": false, "bio": "012345678901234567890" }, 
            { "firstname": "Jenny", "rent": 1200, "pets": "Cats", "smokes": true, "bio": "From the block"},
                { "firstname": "Scrooge", "rent": 1200, "pets": null, "smokes": false, "bio": "He's worth a gillion trillion!" }, { "firstname": "Greg", "rent": 500, "pets": "Dogs", "smokes": false, "bio": "greg is lonely, greg eats pretzels" },
                { "firstname": "Jenny", "rent": 1200, "pets": "Cats", "smokes": true, "bio": "From the block" },
                { "firstname": "Scrooge", "rent": 1200, "pets": null, "smokes": false, "bio": "He's worth a gillion trillion!" }]
    }



		render() {
				return (
						<div>
								<Topbar/>
									<h1 id="header">We Think You'll get along great!</h1>

							<div id="matches-wrapper">
								{
										this.state.tempData.map(i => <Miniprofile
												key={i.id}
												firstname={i.firstname}
												rent={i.rent}
												pets={i.pets}
												smokes={i.smokes}
												bio={i.bio}
										/>)

								}
						</div>

				
						</div>
				)
		}
}

export default MatchesPage;






