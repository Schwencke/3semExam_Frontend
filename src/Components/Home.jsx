import React from 'react'
import LogIn from "../Login";
import RaceList from './RaceList';

const Home = ({loggedIn,facade, setLoggedIn}) => {
    return (
        <div>
      {!loggedIn ?<LogIn facade={facade} setLoggedIn={setLoggedIn}/>: <div>
        <br/>
        <RaceList/>
        </div>}
        </div>
    )
}

export default Home
