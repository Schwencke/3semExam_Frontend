import React from 'react'
import { DropdownButton, Dropdown, Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'

const AdminRace = ({facade}) => {

    const [races, setRaces] = useState([])
    const [cars, setCars] = useState([])
    const [carid,setCarId]= useState()
    const [car,setCar]= useState()
    const [raceid,setRaceId]= useState()
    const [race,setRace]= useState()
    const [toggle, setToggle] = useState()

    const getRaces = (data) => {setRaces(data.allRaces)}
    const getCars = (data) => {setCars(data.allCars)}
    const getData = (data) => {console.log(data)}
    useEffect(() => {
        facade.fetchData('race', getRaces)
        facade.fetchData('car', getCars)
        if(carid && raceid != null){
            facade.addCarToRace(carid,raceid,getData)
            setCarId(null)
            setCar(null)
            setRaceId(null)
            setRace(null)
        }
    }, [toggle])

    const handleSelectRace = (e) => {
        setRaceId(e.target.id)
        setRace(e.target.name)
    }
    const handleSelectCar = (e) => {
        setCarId(e.target.id)
        setCar(e.target.name)
    }

    const handleMerge = () => {
        setToggle(!toggle)
    }

    return (
        <div className='wrapper'>
            <br />
            <h1>Add car to race</h1>
            <br />
            <DropdownButton id="racesDrop" variant="secondary" title="Races">
            {races.map((race) => (
                <Dropdown.Item onClick={handleSelectRace} id={race.id} name={race.name}>{race.name}</Dropdown.Item>
                
            ))}
            </DropdownButton>
            <p>Selected race: {race}</p>
            <DropdownButton id="carsDrop" variant="secondary" title="Cars">
            {cars.map((car) => (
                <Dropdown.Item onClick={handleSelectCar} id={car.id} name={car.make+car.model}>Id:{car.id}. {car.make} {car.model}</Dropdown.Item>
            ))}
            </DropdownButton>
            <p>Selected Car: {car}</p>

            <Button variant='dark' onClick={handleMerge}>Add car to race</Button>
        </div>
    )
}

export default AdminRace
