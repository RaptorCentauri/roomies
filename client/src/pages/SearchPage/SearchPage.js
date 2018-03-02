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

        // console.log(this.state.searchParams);
        

        // this.naturalLanguage();
        // console.log(this.naturalLanguage());
        
    }


    // naturalLanguage = () =>{
    //     let pronoun
    //     switch (this.state.searchParams.gender) {
    //         case "both": pronoun = "he or she";  
    //             break;

    //         case "man": pronoun = "he";
    //             break;

    //         case "woman": pronoun = "she";
    //             break;
        
    //         default:
    //             break;
    //     }
    //     return pronoun;
    // }




    testClick = (event) => {
        event.preventDefault();
        console.log('Button was clicked');
        // this.setState({pets: "Puppy"});
        console.log(this.state);
        API.getMatches(this.state);
    };

    render(){
        return(
            <SearchPanel clickBtn={this.testClick} blah={this.pronoun} searchGender={this.state.searchParams.gender} handleInputChange={this.handleInputChange} />
        )
    }

}

export default SearchPage;