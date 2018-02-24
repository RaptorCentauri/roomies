import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LoginPage from "./pages/LoginPage/loginPage.js"
import MatchesPage from "./pages/MatchesPage/matchesPage.js"
import './App.css';

// import Miniprofile from "./components/miniProfile/miniProfile.js"
// import LoginPanel from './components/loginPanel/loginPanel.js';
// import Topbar from './components/topBar/topBar.js';




const App = () =>
    <Router>   
        <div>
            <Switch> 
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/matches" component={MatchesPage} />
                {/* <Route exact path="/signup" component={SignUpPage} /> */}
                {/* <Route exact path="/search" component={SearchPage} /> */}
            </Switch> 
        </div>
    </Router>

export default App;
