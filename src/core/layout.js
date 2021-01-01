import React from 'react'

import Nav from './nav'

function layout(props) {
    return (
        <div className="layout">
            <Nav />
            {props.children}
        </div>

    )

}

export default layout;