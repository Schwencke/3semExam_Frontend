import React from 'react'

export const Buttons = ({className, text, disabled, onclick}) => {
        console.log(disabled)
    return (
        <button className={className} disabled={disabled?"disabled":""} onClick={onclick}
        >{text}</button>
    )
}
