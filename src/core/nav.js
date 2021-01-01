import React from 'react'
import { Link } from 'react-router-dom'

import store from './../store'

import { logout } from './../action/auth.action.js'

import './../styles/nav.style.css'

function nav(props) {
    let user = localStorage.getItem("currentUser")
        ? JSON.parse(localStorage.getItem("currentUser"))
        : null

    const [state, dispatch] = store()

    return (
        <div className="nav nav--bar">
            <div className="actions">
                <div className="user-info">
                    {user && user.name}
                </div>

                {user ? < Link
                    onClick={() => {
                        logout(dispatch)
                        // props.history.push('/login')
                        return
                    }}
                    to={{
                        pathname: "/login",
                    }}
                    className="link link--nav"
                >
                    Sign out
                </Link> : <Link
                        to={{
                            pathname: "/login",
                        }}
                        className="link link--nav"
                    >
                        Sign in
                </Link>}
            </div>
        </div>
    )
}

export default nav