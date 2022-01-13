import React from 'react'
import { Table } from 'react-bootstrap'
const race = ({race}) => {
    return (
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
            <tbody>
                <tr>
                    <td>{race.id} </td>
                    <td>{race.name} </td>
                    <td>{race.date} </td>
                    <td>{race.time} </td>
                    <td>{race.location} </td>
                </tr>
            </tbody>
        </Table>
    )
}

export default race
