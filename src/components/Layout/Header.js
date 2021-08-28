import Navbar from './Navbar'
import React, { useState } from 'react'
import Topbar from './Topbar'
import { Fragment } from 'react'


const HeaderComponent = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }


    return (
        <Fragment>
            <Topbar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
        </Fragment>
    )
}

export default HeaderComponent