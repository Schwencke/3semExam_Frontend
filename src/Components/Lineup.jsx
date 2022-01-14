import React from 'react'
import Cars from './Cars'

const Lineup = ({facade}) => {
    return (
        <div className='wrapper'>
        <Cars facade={facade}/>
    </div>
    )
}

export default Lineup
