import React from 'react'
import { Router } from "@reach/router"
import Layout from '../../components/Layout/'
import Home from './Home'
import About from './About'
import Movies from './Movies'


const Public = () => {
    return (
        <Layout >
            <Router >
                <Home path="/" />
                <About path="/about" />
                <Movies path="/movies" />
            </Router >
        </Layout>
    )
}

export default Public
