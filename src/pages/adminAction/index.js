import React from 'react'

import Layout from './../../core/layout'

import Questions from './component/quiestions'
import NewQuestion from './component/newQuestion'

import './adminAction.style.css'

function AdminAction() {
    return (
        <Layout>
            <div className="container container--admin-action">
                <div id="bg"></div>
                <NewQuestion />
                <Questions />
            </div>
        </Layout>
    )
}

export default AdminAction