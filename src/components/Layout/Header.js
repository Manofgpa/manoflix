// import { Nav, NavItem, NavLink } from 'reactstrap';
import styled from 'styled-components'
import React from 'react'
import { Nav, NavbarContainer, NavLink } from './NavbarElements'

const HeaderComponent = () => {

    return (
        <Nav>
            <NavbarContainer>
                <NavLink to='/'><img src="img/manoflix.png" width='200px' alt=""></img></NavLink>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/movies'>Movies</NavLink>
            </NavbarContainer>
        </Nav>
    )
}

export default HeaderComponent