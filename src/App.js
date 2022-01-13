import React, { useState, useEffect } from "react";
import Facade from "./apiFacade";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import "./App.css";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Redirect } from "react-router-dom";
function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const logout = () => {
    Facade.logout();
    setLoggedIn(false);
  };

  // const login = (user, pass, setLoggedIn) => {
  //   Facade.login(user,pass,setLoggedIn)
  //   //.then(res =>setLoggedIn(true));
  // }

  useEffect(() =>{
    if (Facade.getToken() !== null && Facade.verifyToken()){
      setLoggedIn(true)
    } else{setLoggedIn(false)}
  }, [])

  // else if(Facade.getToken() === null && loggedIn === true){
  //   setLoggedIn(false)
  //   window.location.href = "/"
  // }

  return (
    <Container>
      <Router>
        <Header
          facade={Facade}
          loggedIn={loggedIn}
          logout={logout}
          setLoggedIn={setLoggedIn}
        />
        <Switch>
          <Route exact path="/">
            <Home
              loggedIn={loggedIn}
              facade={Facade}
              setLoggedIn={setLoggedIn}
            />
          </Route>
          <Route exact path="/placeholderUSER">
            {Facade.hasUserAccess("user", loggedIn) && <></>}
          </Route>
          <Route exact path="/placeholderADMIN">
            {Facade.hasUserAccess("admin", loggedIn) && <></>}
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}
export default App;
