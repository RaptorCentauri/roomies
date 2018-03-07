import React from 'react';
// import MatchesList from "./containers/matchesList.js"
// import SampleContainer from "./containers/sampleContainer.jsx"
// import SearchPage from "./containers/SearchPage/SearchPage.js"
// require(sass sheet)

// import {createStore} from 'redux';
// import allReducers from "./reducers";

// const store = createStore(allReducers);



// import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import MainContainer from "./containers/MainContainer/mainContainer.js"
import MatchesPage from "./containers/MatchesContainer/matchesContainer.js"

import SignUpPage from "./containers/SignUpContainer/SignUpContainer.js"
// import SearchPage from "./pages/SearchPage/SearchPage.js"

import './App.css';


const App = () => (
    <div>
       <MainContainer />
        {/* <SignUpPage /> */}
        {/* <MatchesPage /> */}
    </div>
)


export default App;