import React from 'react'
import LogIn from "../Login";
import Races from './Races';

const Home = ({loggedIn,facade, setLoggedIn}) => {
    return (
        <div>
      {!loggedIn ?<LogIn facade={facade} setLoggedIn={setLoggedIn}/>: <div>
        <br/>
        <Races facade={facade}/>
        </div>}
        </div>
    )
}

export default Home
