// import { Nav, NavItem, NavLink } from 'reactstrap';
import styled from 'styled-components'
import React from 'react'
import { Nav, NavbarContainer, NavLink, MobileIcon, NavMenu, NavItem } from './NavbarElements'
import { FaBars, FaHome } from 'react-icons/fa'
import { MdMovie } from 'react-icons/md'
import { FcAbout } from 'react-icons/fc'


const HeaderComponent = () => {

    return (
        <Nav>
            <NavbarContainer>
                <NavLink to='/'><img src="img/manoflix.png" width='200px' alt=""></img></NavLink>
                <NavLink to='/'><FaHome />Home</NavLink>
                <MobileIcon>
                    <FaBars />
                </MobileIcon>
                <NavLink to='/about'><FcAbout />About</NavLink>
                <NavLink to='/movies'><MdMovie />Movies</NavLink>
            </NavbarContainer>
        </Nav>
    )
}

export default HeaderComponent