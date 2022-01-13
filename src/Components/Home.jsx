import React from 'react'
import LogIn from "../Login";
import Cars from './Cars';
import Races from './Races';
import fp from '../Images/fp.jpg'
import { Image } from 'react-bootstrap';
const Home = ({loggedIn,facade, setLoggedIn}) => {
    return (
        <div>
      {!loggedIn ?<LogIn facade={facade} setLoggedIn={setLoggedIn}/>: <div>
        <br/>
       <p>Welcome to internaional race entutiasts</p>
       <Image roundedCircle src={fp} />
        </div>}
        </div>
    )
}

export default Home
