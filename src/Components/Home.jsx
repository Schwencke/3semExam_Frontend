import React from 'react'
import LogIn from "../Login";
import Cars from './Cars';
import Races from './Races';
import fp from '../Images/fp.jpg'
import { Image, Card, Button } from 'react-bootstrap';
const Home = ({loggedIn,facade, setLoggedIn}) => {
    return (
        <div>
      {!loggedIn ?<LogIn facade={facade} setLoggedIn={setLoggedIn}/>: <div>
        <br/>
       <h1>Welcome to international race enthutiasts</h1>
       <Card className="text-center">
  <Card.Header>News</Card.Header>
  <Card.Body>
    <Card.Title>The Masters Race</Card.Title>
    <Card.Text>
      The deathdefying race, a must see! <br /><br />
      <Image roundedCircle src={fp} />
    </Card.Text>
    <Button variant="primary">Go to event!</Button>
  </Card.Body>
  <Card.Footer className="text-muted">2 days ago</Card.Footer>
</Card>
      
        </div>}
        </div>
    )
}

export default Home
