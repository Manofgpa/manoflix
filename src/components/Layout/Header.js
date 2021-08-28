import styled from 'styled-components'
import React from 'react'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    NavLink,
    MobileIcon,
    NavMenu,
    NavItem,
    NavBtn,
    NavBtnLink
} from './NavbarElements'
import { FaBars, FaHome } from 'react-icons/fa'
import { MdMovie } from 'react-icons/md'
import { BiLogInCircle } from 'react-icons/bi'
import { AiOutlineUserAdd } from 'react-icons/ai'

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

            <NavBtn>
                <NavBtnLink to='/signup'><AiOutlineUserAdd />Sign Up</NavBtnLink>
                <NavBtnLink to='/login'><BiLogInCircle />Login</NavBtnLink>
            </NavBtn>
        </Nav>
    )
}

export default HeaderComponent