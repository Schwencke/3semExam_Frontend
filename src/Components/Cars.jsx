import React from 'react'
import Car from './Car'
import { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import Dropdowns from './Dropdowns'
const Cars = ({facade}) => {
  
    const [cars, setCars] = useState([])
    const [races, setRaces] = useState([])
    const [selectedRace, setSelectedRace] = useState(1)
    const [raceName, setRaceName] = useState("")
    const [toggle, setToggle] = useState(true)
    const getCars = (data) => {setCars(data.allCars)}
    const getRaces = (data) => {setRaces(data.allRaces)}
    const getRaceName = (data) => {setRaceName(data.name)}
   

    useEffect(() => {
        facade.fetchData('car/race/'+selectedRace, getCars)
        facade.fetchData('race/'+selectedRace, getRaceName)
        facade.fetchData('race', getRaces)
    }, [toggle])

    const selector = (data) => {
        setSelectedRace(data.target.id)
        setRaceName(data.target.text)
        setToggle(!toggle)
    }

    return (
        <div>
            <br />
            <h1>Lineups</h1>
        <Dropdowns data={races} handleChange={selector}/>
        <h3>Results showing for {raceName}</h3>
        <Table striped bordered hover>
            <thead>
                <tr>
                   <th>Id</th> 
                   <th>Make</th> 
                   <th>Model</th> 
                   <th>Year</th> 
                </tr>
            </thead>
        {cars.map((car) => (
            
        <Car key={car.id} car={car}/>
       
        ))}
       </Table>
       </div>
    )
}

export default Cars
