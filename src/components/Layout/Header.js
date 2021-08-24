import { Nav, NavItem, NavLink } from 'reactstrap';
import styled from 'styled-components'
import { Link } from '@reach/router'
import React from 'react'


const HeaderComponent = () => {

    return (
        <Navigation >
            <Nav tabs>
                <Header className="align-items-center">
                    <Logo>
                        <img src="manoflix.png" width='200px' alt=""></img>
                    </Logo>
                    <NavItem>
                        <NavLink tag={Link} to="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/movies">Movies</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/about">About</NavLink>
                    </NavItem>
                </Header>
            </Nav>
        </Navigation>
    )
}

export default HeaderComponent


const Navigation = styled.div`
    background-color: #0B2027;
    color: #D52941;
    display: flex;
`

const Header = styled.div`
    display: flex;
    color: white !important;
`

const Logo = styled.div`
    flex: 1;
`