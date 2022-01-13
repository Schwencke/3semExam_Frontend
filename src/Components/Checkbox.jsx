import React from 'react'
import { Form } from 'react-bootstrap'

const Checkbox = ({id, label, onChange}) => {

    const style = {paddingRight: 10}

    return (
      <Form.Check
      inline
      type="switch"
      onChange={onChange}
      id={id}
      label={label}
      />
        
    )
}

export default Checkbox
