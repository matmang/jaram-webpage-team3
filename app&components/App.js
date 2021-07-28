import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import LandingPage from './components/LandingPage/LandingPage'
import NavBar from './components/NavBar/NavBar'
import Introduce from './components/Introduce/Introduce'
import Auth from './components/Auth/Auth'
import AuthForm from './components/AuthForm/AuthForm'
import fbase from './components/fbase/fbase'
function App() {
  return (
  
    <Router>
      <NavBar />
        <Switch>
          <Route exact path="/">
          <LandingPage />
          <Introduce />
          </Route>
        
   
        <Route exact path="/login" component={Auth} />
     
        
        </Switch>

      </Router>
 
  );
}

export default App;
