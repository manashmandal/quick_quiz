import React from 'react'

import './../styles/card.style.css'

function card(props) {
    const { header, body, footer, classNameMod } = props

    return (

        <div className={`card card--${classNameMod}`}>
            <div className={`card__header card--${classNameMod}__header`}>
                {header()}
            </div>

            <div className={`card card--${classNameMod}__body`}>
                {body()}
            </div>

            <div className={`card card--${classNameMod}__footer`}>
                {footer()}
            </div>
        </div>

    )

}

export default card;