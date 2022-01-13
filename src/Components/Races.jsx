import Race from './Race'
import { useEffect, useState } from "react"
import { Table } from 'react-bootstrap'
import SearchBar from './SearchBar'
import Checkbox from './Checkbox'
const Races = ({facade}) => {

    const [races, setRaces] = useState([])
    const [search, setSearch] = useState("")
    const getRaces = (data) => {setRaces(data.allRaces)}

    const searchChange = (e) => {
        setSearch(e.target.value)
    }

    let mergedRaces = races.map(val => {
        return {...val}
    })

    const filteredRaces = mergedRaces.filter(val => val.name.toLowerCase().includes(search.toLowerCase()))

    useEffect(() => {
        facade.fetchData('race', getRaces)
       
    }, [])

    return (
        <div>
        <p>All upcoming races</p>
        <div>
            <Checkbox id={"name"} label="Name"/>
            <Checkbox id={"date"} label="Date"/>
            <Checkbox id={"time"} label="Time"/>
            <Checkbox id={"location"} label="Location"/>
            <SearchBar placeholder={"Search for a race"} handleChange={searchChange}/>
            </div>
        
        <Table striped bordered hover>
            <thead>
                <tr>
                   <th>Id</th> 
                   <th>Name</th> 
                   <th>Date</th> 
                   <th>Time</th> 
                   <th>Location</th> 
                </tr>
            </thead>
        {filteredRaces.map((race) => (
        <Race key={race.id} race={race}/>
        ))}
        </Table>
        </div>
    )
}

export default Races
