import React from 'react';
import Navbar from './homePageComponents/Navbar';
import './HomePageApp.css';
import Home from './homePageComponents/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './homePageComponents/pages/Services';
import Products from './homePageComponents/pages/Products';
import SignUp from './homePageComponents/pages/SignUp';
import VITconvo from './homePageComponents/pages/VITconvo';

function HomePageApp() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
			<Route path='/' exact component={Home} />
        	<Route path='/services' component={Services} />
        	<Route path='/products' component={Products} />
          	<Route path='/sign-up' component={SignUp} />
          	<Route path ='/VITconvo' component = {VITconvo} />
        </Switch>
      </Router>
    </>
  );
}

export default HomePageApp;
