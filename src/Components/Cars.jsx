import React from 'react'
import Car from './Car'
import { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
const Cars = ({facade}) => {
  
    const [cars, setCars] = useState([])
    const getCars = (data) => {setCars(data.allCars)}

    useEffect(() => {
        facade.fetchData('car/race/1', getCars)
       
    }, [])

    return (
        <div>
            
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
            
        <Car key={car.id} car={car}/>
       
        ))}
       </Table>
       </div>
    )
}

export default Cars
