import React from 'react'
import { Link } from 'react-router-dom'

import Layout from './../../core/layout'

import store from './../../store'

import './home.style.css'
import './../../styles/link.style.css'

import home_banner_image from './images/home_banner.svg'

export default function Home() {

    const [state] = store()
    const { auth } = state
    const { userDetails } = auth

    return (
        <Layout>
            <div className="container container--home">
                <div id="bg"></div>
                <div className="banner-home">
                    <img src={home_banner_image} alt="home" className="banner--home" />
                </div>

                <div className="welcome-home">
                    <div className="intro">
                        Welcome to <span>QuickQuiz</span>
                    </div>
                    <div className="description">
                        An old-school online service conceived for performing general knowledage,
                        QuickQuiz comes with free quiz questions.
                        One can participate  any quiz by registering an account and following the simple instructions.
                    </div>

                    {userDetails
                        ? <Link
                            to={{
                                pathname: "/quiz",
                            }}
                            className="link link--sign-in"
                        >
                            Participate a quick quiz
                    </Link>
                        : <Link
                            to={{
                                pathname: "/login",
                            }}
                            className="link link--sign-in"
                        >
                            Sign in now
                    </Link>
                    }
                </div>


            </div>
        </Layout>
    )

}