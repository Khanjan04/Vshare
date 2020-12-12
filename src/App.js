import logo from './logo.svg';
import './App.css';

import React, {Component} from  'react'


import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import HomePageApp from './HomePageApp.js'


class App extends Component {
	render(){
	  
		  return (
		  	<>
		  		<Router>
		  			<HomePageApp/>
		  				<Switch>
		  					
		  				</Switch>
		  		</Router>
		  	</>
		  );
	}
}

export default App;
