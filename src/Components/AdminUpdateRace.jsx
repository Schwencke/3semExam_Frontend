import React from 'react'
import { useEffect, useState } from 'react'
import { Form, Button, ListGroup, DropdownButton, Dropdown } from 'react-bootstrap'

const AdminUpdateRace = ({facade}) => {

    const [races, setRaces] = useState([])
    const [raceid,setRaceId]= useState()
    const [race,setRace]= useState()
    const [toggle, setToggle] = useState()
    const [selectedRace, setSelecetedRace] = useState()
    const [carList, setCarList] = useState([])
    //{id:"",make:"",mode:"",year:""}
    const getRaces = (data) => {setRaces(data.allRaces)}
    const getRace = (data) => { setSelecetedRace(data)}
    const getCarList = (data) => {
        data.cars.allCars.map((car)=>{
            setCarList([...carList, car])
        })
    }
    // e.target.name.value = null
    // e.target.date.value = null
    // e.target.time.value = null
    // e.target.location.value  = null
    const addCarToArray = (e) => {
        e.preventDefault()
        let newCar = {
            "id":e.target.id.value,
            "make":e.target.make.value,
            "model":e.target.model.value,
            "year":e.target.year.value
        }
       // setCarList([...carList, newCar])
      setCarList([...carList, newCar])
    }

    const handleSubmit = (e) => {
        e.preventDefault()
       let race ={
            "id":e.target.id.value,
            "name":e.target.name.value,
            "date":e.target.date.value,
            "time":e.target.time.value,
            "location":e.target.location.value,
            "cars":carList
        }
        facade.editRace(race)
        setToggle(!toggle)
    }

    const showDate = () =>{if(selectedRace.date !== undefined) return selectedRace.date}
    const showTime = () =>{if(selectedRace.time !== undefined) return selectedRace.time}
    const showLocation = () =>{if(selectedRace.location !== undefined) return selectedRace.location}

    const handleSelectRace = (e) => {
        setRaceId(e.target.id)
        setCarList([])
        setRace(null)
        setRace(e.target.name)
    }

    useEffect(() => {
        facade.fetchData('race', getRaces)
        if(raceid != null){ facade.fetchData('race/'+raceid,getCarList)}
        if(raceid != null){facade.fetchData('race/'+raceid,getRace)}
    }, [toggle,raceid])

    const handleMerge = () => {
        setToggle(!toggle)
    }
    return (
        <div>
        <Form onSubmit={handleSubmit}>
        <br />
    <h1>Edit a race</h1>
    <br />
    <DropdownButton id="racesDrop" variant="secondary" title="Races">
        {races.map((race) => (
            <Dropdown.Item onClick={handleSelectRace} id={race.id} name={race.name}>{race.name}</Dropdown.Item>
            
        ))}
        </DropdownButton>
        <p>Selected race: {race}</p>
        {/* <p>{selectedRace}</p>
        <p>{carList}</p> */}
        
  <Form.Group className="mb-3">
  <Form.Label>Race Id</Form.Label>
    <Form.Control type="number" id='id' required autoComplete="off" placeholder="Enter race id" value={raceid} />
    <br />
    <Form.Label>Race name</Form.Label>
    <Form.Control type="text" id='name' required autoComplete="off" placeholder="Enter race name" value={race} />
    <br />
    <Form.Label>Date DD-MM-YYYY</Form.Label>
    <Form.Control type="text" id='date' required autoComplete="off" placeholder="Enter race date" />
    <br />
    <Form.Label>Time HH:MM</Form.Label>
    <Form.Control type="text" id='time' required autoComplete="off" placeholder="Enter race time" />
    <br />
    <Form.Label>Location</Form.Label>
    <Form.Control type="text" id='location' required autoComplete="off" placeholder="Enter race location" />
  </Form.Group>
  <ListGroup>
<Form.Label>Car List</Form.Label>
  {carList.map((car)=> (
      <ListGroup.Item>ID: {car.id} {car.make} {car.model}</ListGroup.Item>
  ))}

</ListGroup>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

<Form onSubmit={addCarToArray}>
<Form.Group className='mb-3'>
<Form.Label>Car id</Form.Label>
<Form.Control type="text" id='id' required autoComplete="off" placeholder="Enter car id"/>
<br />
<Form.Label>Car make</Form.Label>
<Form.Control type="text" id='make' required autoComplete="off" placeholder="Enter car make" />
<br />
<Form.Label>Car model</Form.Label>
<Form.Control type="text" id='model' required autoComplete="off" placeholder="Enter car model" />
<br />
<Form.Label>Car Year</Form.Label>
<Form.Control type="text" id='year' required autoComplete="off" placeholder="Enter car year" />
</Form.Group>
<Button variant="primary" type="submit">
Saubmit
</Button>
</Form>
</div>
    )
}

export default AdminUpdateRace
