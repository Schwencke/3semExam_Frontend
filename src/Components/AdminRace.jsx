import React from 'react'
import { DropdownButton, Dropdown, Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import AdminAddToRace from './AdminAddToRace'

const AdminRace = ({facade}) => {

   
    return (
        <div className='wrapper'>
            <AdminAddToRace facade={facade}/>
        </div>
    )
}

export default AdminRace
