import styled from 'styled-components'
import React from 'react'
import { Nav, NavbarContainer, NavLogo, NavLink, MobileIcon, NavMenu, NavItem } from './NavbarElements'
import { FaBars, FaHome } from 'react-icons/fa'
import { MdMovie } from 'react-icons/md'


const HeaderComponent = () => {

    return (
        <Nav>
            <NavLogo to='/'><img src="img/manoflix.png" width='200px' alt=""></img></NavLogo>
            <MobileIcon>
                <FaBars />
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLink to='/'><FaHome />Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to='/movies'><MdMovie />Movies</NavLink>
                </NavItem>
            </NavMenu>
        </Nav>
    )
}

export default HeaderComponent