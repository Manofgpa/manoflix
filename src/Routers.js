import { Router } from "@reach/router"
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Movies from './components/Movies'
import React from 'react'



const Routers = () => (
    <Layout >
        <Router >
            <Home path="/" />
            <About path="/about" />
            <Movies path="/movies" />
        </Router >
    </Layout>
)


export default Routers