import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LoginPage from "./pages/LoginPage/loginPage.js"
import MatchesPage from "./pages/MatchesPage/matchesPage.js"
import SignUpPage from "./pages/SignUpPage/SignUpPage.js"
import SearchPage from "./pages/SearchPage/SearchPage.js"
import './App.css';

class App extends React.Component{
	render(){
		return(
			<Router>
				<div>
				<Switch>
                    <Route exact path="/" component={LoginPage} />
					<Route exact path="/login" component={LoginPage} />
					<Route exact path="/matches" component={MatchesPage} />
					<Route exact path="/signup" component={SignUpPage}/>
					<Route exact path="/search" component={SearchPage} />
				</Switch>
				</div>
			</Router>
		)
	}
}
export default App;