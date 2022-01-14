import React from 'react'

const Driver = ({driver}) => {
    return (
        <tbody>
                <tr>
                    <td>{driver.id} </td>
                    <td>{driver.name} </td>
                    <td>{driver.birthYear} </td>
                    <td>{driver.gender} </td>
                </tr>
            </tbody>
    )
}

export default Driver
