import React from "react"
import SearchPanel from "../../components/searchPanel/searchPanel.js"
import API from "../../util/API.js";


class SearchPage extends React.Component{

    state = {
        searchParams:{
            gender: "both",
            pets: "none",
            smokes: false,
            rent: 1000
        },
    };

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({ searchParams: { ...this.state.searchParams, [name]: value } });        
    }

    testClick = (event) => {
        event.preventDefault();
        console.log('Button was clicked');
        // this.setState({pets: "Puppy"});
        console.log(this.state.searchParams);
        API.getMatches(this.state.searchParams);
    };

    render(){
        return(
            <SearchPanel clickBtn={this.testClick} blah={this.pronoun} searchGender={this.state.searchParams.gender} handleInputChange={this.handleInputChange} />
        )
    }

}

export default SearchPage;