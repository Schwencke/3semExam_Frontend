import React from 'react'
import Cars from './Cars'
import Races from './Races'
import Drivers from './Drivers'
import { useState,useEffect } from 'react'

const Overview = ({facade}) => {

    const [id, setId] = useState(0)

    const viewDrivers = (e) =>{
            setId(e.target.id)
    }

    return (
      
        <div className='wrapper'>
            <Races facade={facade} viewDrivers={viewDrivers}/>
            <Drivers facade={facade} id={id}/>
        </div>
       
    )
}

export default Overview
