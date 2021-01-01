import React, { useState, } from 'react'

import { loginUser } from './../../action/auth.action.js'
import store from './../../store'

import Input from './../../core/input'
import Button from './../../core/button'
import Card from './../../core/card'
import Msg from './../../core/msg'

import login_image from './images/login.png'

import './login.style.css';

function Login(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [state, dispatch] = store()

    const { auth } = state
    const { error } = auth

    const handleEmail = (user_email) => setEmail(user_email)
    const handlePassword = (user_password) => setPassword(user_password)

    const handleLogin = (e) => {
        e.preventDefault()
        let payload = { email, password }
        try {
            //loginUser action makes the request and handles all the neccessary state changes
            let response = loginUser(dispatch, payload)
            if (!response) return
            if (response.role === "1") props.history.push('/quiz')
            if (response.role === "2") props.history.push("/admin-action")
        } catch (error) {
            console.log(error)
        }
    }

    // create login card
    const getLoginCardHeader = () => <>
        <img className="login_image" src={login_image} alt="login" /> <span>Login</span>
    </>
    const getLoginCardBody = () => <>
        <Input
            type="text"
            handleChange={handleEmail}
            classNameMod='login'
            name='email'
            placeholder='Email'
        />

        <Input
            type="password"
            handleChange={handlePassword}
            classNameMod='login'
            name='password'
            placeholder='Password'
        />
        {error && <Msg classNameMod="error">
            <span>
                {error}
            </span>
        </Msg>}
    </>
    const getLoginCardFooter = () => <Button
        handleClick={handleLogin}
        classNameMod="login"
    >
        <span>Login</span>
    </Button>

    return (<div className="container container--login">
        <Card
            header={getLoginCardHeader}
            body={getLoginCardBody}
            footer={getLoginCardFooter}
            classNameMod="login"
        />
    </div>
    );
}

export default Login;