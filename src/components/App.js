import React, { useState, useEffect } from "react";
import AppRouter from "./Router";
import { authService } from "../fbase";
import LandingPage from "./LandingPage";
import NavBar from "./NavBar";
import Introduce from "./Introduce";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Auth from "../routes/Auth";
import Footer from "./Footer";

function App() {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          updateProfile: (args) => user.updateProfile(args),
        });
      } else {
        setUserObj(null);
      }
      setInit(true);
    });
  }, []);
  const refreshUser = () => {
    const user = authService.currentUser;
    setUserObj({
      displayName: user.displayName,
      uid: user.uid,
      updateProfile: (args) => user.updateProfile(args),
    });
  };
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <LandingPage />
          <Introduce />
          <Footer />
        </Route>
        <Route exact path="/login">
          <>
            {init ? (
              <AppRouter
                refreshUser={refreshUser}
                isLoggedIn={Boolean(userObj)}
                userObj={userObj}
              />
            ) : (
              "Initializing..."
            )}
          </>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
