import { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'

const AdminNewRace = ({facade}) => {

    const [race, setRace] = useState()
    const [toggle, setToggle] = useState(false)
    const getRace = (data) => {setRace(data)}
    const handleSubmit = (e) => {
        e.preventDefault()
        setRace({
            "name":e.target.name.value,
            "date":e.target.date.value,
            "time":e.target.time.value,
            "location":e.target.location.value
        })
        setToggle(!toggle)
        e.target.name.value = null
        e.target.date.value = null
        e.target.time.value = null
        e.target.location.value  = null
        
    }

    useEffect(() => {
       if (race != null){ facade.createNewRace(race, getRace)}
    }, [toggle])

    return (
      
    <Form onSubmit={handleSubmit}>
        <br />
    <h1>Create a new race</h1>
    <br />
  <Form.Group className="mb-3">
  <Form.Label>Race name</Form.Label>
    <Form.Control type="text" id='name' required autoComplete="off" placeholder="Enter race name" />
    <br />
    <Form.Label>Date DD-MM-YYYY</Form.Label>
    <Form.Control type="text" id='date' required autoComplete="off" placeholder="When is the race?" />
    <br />
    <Form.Label>Time HH:MM</Form.Label>
    <Form.Control type="text" id='time' required autoComplete="off" placeholder="What time?" />
    <br />
    <Form.Label>Location</Form.Label>
    <Form.Control type="text" id='location' required autoComplete="off" placeholder="Where?" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    )
}

export default AdminNewRace
