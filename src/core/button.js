import React from 'react'

import './../styles/button.style.css'

function button(props) {
    const { handleClick, classNameMod } = props

    return (

        <button
            className={`btn btn--${classNameMod}`}
            onClick={(e) => handleClick(e)}
        >
            {props.children}
        </button>

    )

}

export default button;