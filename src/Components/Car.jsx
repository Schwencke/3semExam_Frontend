import React from 'react'
import { Table } from 'react-bootstrap'

const Car = ({car}) => {
    return (
            <tbody>
                <tr>
                    <td>{car.id} </td>
                    <td>{car.make} </td>
                    <td>{car.model} </td>
                    <td>{car.year} </td>
                </tr>
            </tbody>
    )
}

export default Car
