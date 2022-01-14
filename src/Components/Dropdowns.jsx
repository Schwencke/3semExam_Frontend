import React from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { useState, useEffect } from 'react';

const Dropdowns = ({data, handleChange}) => {


    return (
        <>
 
  <DropdownButton
    id="dropdown-button-dark-example2"
    variant="secondary"
    menuVariant="dark"
    title="Choose Race"
    className="mt-2">
      {data.map((data)=> (
        <Dropdown.Item onClick={handleChange} key={data.id} id={data.id}>{data.name}</Dropdown.Item>
      ))}
  </DropdownButton>
</>
    )
}

export default Dropdowns
