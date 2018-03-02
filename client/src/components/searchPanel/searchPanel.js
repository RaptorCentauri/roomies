import React from "react";
import "./searchPanel.css";


class SearchPanel extends React.Component {

    render() {
        return (
            <div id="search-wrapper">
                <div id="search-title">
                    <h3>My New Roomate is</h3>
                </div>


                <form action="" method="">
						<select name="gender" onChange={this.props.handleInputChange}>
                            <option value="both">A man or woman</option>
                            <option value="man">A man</option>
                            <option value="woman">A woman</option>
                        </select>

                        <br/>

						<select name="pets" onChange={this.props.handleInputChange}>
                            <option value="all">It doesnt matter if {this.props.searchGender === "both" ? "he or she" : this.props.searchGender === "man" ? "he" : "she"} has pets</option>
                            <option value="Cat">{this.props.searchGender === "both" ? "He or she" : this.props.searchGender === "man" ? "He" : "She"} only has cats</option>
                            <option value="Dog">{this.props.searchGender === "both" ? "He or she" : this.props.searchGender === "man" ? "He" : "She"} only has dogs</option>
                            <option value="other">{this.props.searchGender === "both" ? "He or she" : this.props.searchGender === "man" ? "He" : "She"} has pets, but they are not cats or dogs</option>
                            <option value="none">{this.props.searchGender === "both" ? "He or she" : this.props.searchGender === "man" ? "He" : "She"} has no pets</option>
                        </select>

                        <br/>

                        <select name="smokes" onChange={this.props.handleInputChange}>
                            <option value={false}>{this.props.searchGender === "both" ? "He or she" : this.props.searchGender === "man" ? "He" : "She"} is not a smoker</option>
                            <option value={true}>{this.props.searchGender === "both" ? "He or she" : this.props.searchGender === "man" ? "He" : "She"} is a smoker</option>
                        </select>

                        <br/>

                    <select name="rent" onChange={this.props.handleInputChange}>
                        <option value={1000} > {this.props.searchGender === "both" ? "He or she" : this.props.searchGender === "man" ? "He" : "She"} can afford a rent of $1000</option>
                        <option value={2000} > {this.props.searchGender === "both" ? "He or she" : this.props.searchGender === "man" ? "He" : "She"} can afford a rent of $2000</option>
                        <option value={3000} > {this.props.searchGender === "both" ? "He or she" : this.props.searchGender === "man" ? "He" : "She"} can afford a rent of $3000</option>
                        <option value={4000} > {this.props.searchGender === "both" ? "He or she" : this.props.searchGender === "man" ? "He" : "She"} can afford a rent of $4000</option>
                        <option value={5000} > {this.props.searchGender === "both" ? "He or she" : this.props.searchGender === "man" ? "He" : "She"} can afford a rent of $5000</option>
					</select>

                    <br/>

                    <button onClick={this.props.clickBtn}>Test</button>

                </form>
            </div>
        )
    }
}

export default SearchPanel