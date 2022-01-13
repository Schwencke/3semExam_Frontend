import Race from './Race'
import { useEffect, useState } from "react"

const Races = ({facade}) => {

    const [races, setRaces] = useState([])
    const getRaces = (data) => {setRaces(data.allRaces)}

    useEffect(() => {
        facade.fetchData('race', getRaces)
       
    }, [])

    return (
        <>
        {races.map((race) => (<Race key={race.id} race={race}/>))}
        </>
    )
}

export default Races
