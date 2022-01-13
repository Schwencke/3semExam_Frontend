import React from 'react'
import Race from './Race'

const Races = ({races}) => {
    return (
        <>
        {races.map((race) => (<Race key={race.id} race={race}/>))}
        </>
    )
}

export default Races
