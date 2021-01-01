import React from 'react'

import './../styles/msg.style.css'

function button(props) {
    const { classNameMod } = props

    return (
        <div className={`msg msg--${classNameMod}`}>
            {props.children}
        </div>

    )

}

export default button;