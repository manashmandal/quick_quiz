import React from 'react'

import './../styles/input.style.css'

function input(props) {
    const { type, handleChange, classNameMod, name, placeholder, value = null } = props

    return (

        <input
            className={`input input--${type} input--${type}--${classNameMod}`}
            type={type}
            onChange={(e) => handleChange(e.target.value)}
            id={`${classNameMod}_${type}_${name}`}
            value={value}
            placeholder={placeholder}
        />

    )

}

export default input;