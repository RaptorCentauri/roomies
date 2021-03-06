import React from "react";
import "./searchPanel.css";


class SearchPanel extends React.Component{

    rentSelect = (gender) => {
        let rent = [];
        for (let i = 500; i <= 3000; i += 250) {
            rent.push(i)
        }
        let rentOptions = rent.map(function (i) {
           return <option value={i} key={i} > {gender === "both" ? "He or she" : gender === "man" ? "He" : "She"} can afford a rent of ${i}</option>
        })
        return <select name="rent" onChange={this.props.handleInputChange}>{rentOptions}</select>
    }
    

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
                            <option value="both">It doesnt matter if {this.props.gender === "both" ? "he or she" : this.props.gender === "man" ? "he" : "she"} has pets</option>
                            <option value="cat">{this.props.gender === "both" ? "He or she" : this.props.gender === "man" ? "He" : "She"} only has cats</option>
                            <option value="dog">{this.props.gender === "both" ? "He or she" : this.props.gender === "man" ? "He" : "She"} only has dogs</option>
                            <option value="none">{this.props.gender === "both" ? "He or she" : this.props.gender === "man" ? "He" : "She"} has no pets</option>
                        </select>

                        <br/>

                        <select name="smokes" onChange={this.props.handleInputChange}>
                            <option value={false}>{this.props.gender === "both" ? "He or she" : this.props.gender === "man" ? "He" : "She"} can not be a smoker</option>
                            <option value={true}>{this.props.gender === "both" ? "He or she" : this.props.gender === "man" ? "He" : "She"} can be a smoker</option>
                        </select>

                        <br/>


                    {this.rentSelect(this.props.gender)}


                    <br/>
                    <br />

                    <button id="search-button" onClick={this.props.handleClick}>Find Me A Roomie!</button>

                </form>
            </div>
        )
    }
}

export default SearchPanel