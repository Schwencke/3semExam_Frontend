import React from 'react'
import { useEffect, useState } from "react"
import facade from '../apiFacade'
import Races from './Races'


const RaceList = () => {
const [races, setRaces] = useState([])
const getRaces = (data) => {setRaces(data.allRaces)}


    useEffect(() => {
        facade.fetchData('race', getRaces)
       
    }, [])
    return (
       
     <Races races={races}/>
    )
}

export default RaceList
