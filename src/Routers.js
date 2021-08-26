import React from 'react'
import { Router } from "@reach/router"
import Public from './views/public/'


const Routers = () => (
    <Router>
        <Public path="/*" />
    </Router>
)


export default Routers