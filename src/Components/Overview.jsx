import React from 'react'
import Cars from './Cars'
import Races from './Races'
const Overview = ({facade}) => {
    return (
      
        <div className='wrapper'>
            {/* <Cars facade={facade}/> */}
            <Races facade={facade}/>
        </div>
       
    )
}

export default Overview
