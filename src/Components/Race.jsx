import React from 'react'
import { Button } from 'react-bootstrap'
const race = ({race,viewDrivers,label}) => {
    return (
            <tbody>
                <tr>
                    <td>{race.id} </td>
                    <td>{race.name} </td>
                    <td>{race.date} </td>
                    <td>{race.time} </td>
                    <td>{race.location} <Button id={race.id} onClick={viewDrivers} variant="secondary">{label}</Button></td>
                    
                </tr>
            </tbody>
    )
}

export default race
