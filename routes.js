import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import LandingPage2 from './app/landing_page2';
import LoginPage from './app/login_page';
import About from './app/about';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage2} />
      <Route path="/login_page" component={LoginPage} />
      <Route path="/about" component={About} />
      {/* Add more routes for other pages */}
    </Switch>
  );
};

export default Routes;