import React, { useState, useEffect } from "react";
import Facade from "./apiFacade";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import "./App.css";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Overview from "./Components/Overview";
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
          <Route exact path="/Overview">
            {Facade.hasUserAccess("user", loggedIn) && 
            <Overview
             facade={Facade}/>}
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
