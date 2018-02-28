import React from "react";
import "./searchPanel.css";


class SearchPanel extends React.Component {
    render() {
        return (
            <div id="profile-create-panel">
                <h1>WHERE THE USER SETS SEARCH PARAMETERS</h1>
                <form action="" method="">
                    <p>Show me 
						<select name="gender" onChange={this.props.handleInputChange}>
                            <option value="men">Man</option>
                            <option value="women">Woman</option>
                        </select>
                    </p>

                    <p>Who have
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
                        <option value={1000} > 1000</option>
						<option value={2000} > 2000</option>
						<option value={3000} > 3000</option>
						<option value={4000} > 4000</option>
						<option value={5000} > 5000</option>
					</select>

                    {/* Bio  text field*/}
                    <button onClick={this.props.clickBtn}>Test</button>

                </form>
            </div>
        )
    }
}

export default SearchPanel