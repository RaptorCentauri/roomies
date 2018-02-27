import React from "react"
import SearchPanel from "../../components/searchPanel/searchPanel.js"

class SearchPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {   
            gender: "man",
            pets: "none",
            smokes: false,
            rent: 1000
        };
    }


    handleInputChange = (event) =>{
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({[name]:value});
    }


    testClick = (event) => {
        event.preventDefault();
        console.log('Button was clicked');
        // this.setState({pets: "Puppy"});
        console.log(this.state);
    };

    render(){
        return(
            <SearchPanel clicky={this.testClick} gender={this.state.gender} handleInputChange={this.handleInputChange} />
        )
    }

}

export default SearchPage;