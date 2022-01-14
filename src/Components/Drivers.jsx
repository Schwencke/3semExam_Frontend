import { useEffect, useState } from "react"
import { Table } from 'react-bootstrap'
import Driver from "./Driver"

const Drivers = ({id, facade}) => {

    const [drivers, setDrivers] = useState([])
    const getDrivers = (data) => {
        setDrivers(data.allDrivers)
    }
   

   
      
    useEffect(() => {
        if(id !== 0){facade.fetchData('driver/race/'+id,getDrivers)
                    setDrivers([])}
    }, [id])

    return (
        <div>
            <Table striped bordered hover>
            <thead>
                <tr>
                   <th>Id</th> 
                   <th>Name</th> 
                   <th>Birth Year</th> 
                   <th>Gender</th> 
                </tr>
            </thead>
        {drivers.map((driver) => (
        <Driver key={driver.id} driver={driver}/>
        ))}
        </Table>
        </div>
    )
}

export default Drivers
