// import { Nav, NavItem, NavLink } from 'reactstrap';
import styled from 'styled-components'
import React from 'react'
import { Nav, NavbarContainer, NavLogo, NavLink, MobileIcon, NavMenu, NavItem } from './NavbarElements'
import { FaBars, FaHome } from 'react-icons/fa'
import { MdMovie } from 'react-icons/md'


const HeaderComponent = () => {

    return (
        <Nav>
            <NavbarContainer>
                {/* <NavLink to='/'><NavLogo src="img/manoflix.png" width='200px' alt=""></NavLogo></NavLink> */}
                <NavLogo src="img/manoflix.png" width='200px' alt=""></NavLogo>
                <NavMenu>
                    <NavLink to='/'><FaHome />Home</NavLink>
                    <NavLink to='/movies'><MdMovie />Movies</NavLink>
                </NavMenu>
                <MobileIcon>
                    <FaBars />
                </MobileIcon>
            </NavbarContainer>
        </Nav>
    )
}

export default HeaderComponent