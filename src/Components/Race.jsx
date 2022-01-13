import React from 'react'
import { Table } from 'react-bootstrap'
const race = ({race}) => {
    return (
            <tbody>
                <tr>
                    <td>{race.id} </td>
                    <td>{race.name} </td>
                    <td>{race.date} </td>
                    <td>{race.time} </td>
                    <td>{race.location} </td>
                </tr>
            </tbody>
    )
}

export default race
