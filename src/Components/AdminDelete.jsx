import React from 'react'
import { useState, useEffect } from 'react'
import { Table, Button } from 'react-bootstrap'

const AdminDelete = ({facade}) => {

    const[cars, setCars] = useState([])
    const[toggle, setToggle] = useState(false)
    const[id, setId] = useState()
    const getCars = (data) => {setCars(data.allCars)}
    useEffect(() => {
      //  facade.deleteCar(carToDelete.id)
      facade.fetchData('car', getCars)
    }, [])

    const deleteCar = (e) =>{
        e.preventDefault()
        facade.deleteCar(e.target.id)
        cars.pop(e.target.id)
}

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                   <th>Id</th> 
                   <th>Make</th> 
                   <th>Model</th> 
                   <th>Year</th> 
                </tr>
            </thead>
        {cars.map((car) => (
         <tbody>
         <tr>
             <td>{car.id} </td>
             <td>{car.make} </td>
             <td>{car.model} </td>
             <td>{car.year}<Button id={car.id} onClick={deleteCar} variant="secondary">Delete</Button> </td>
              
             
         </tr>
     </tbody>
        ))}
        </Table>
    )
}

export default AdminDelete
