import { Nav, NavItem, NavLink } from 'reactstrap';
import styled from 'styled-components'


const HeaderComponent = () => {

    return (
        <Navigation >
            <Nav tabs>
                <Header className="align-items-center">
                    <Logo>
                        <img src="manoflix.png" width='200px' alt=""></img>
                    </Logo>
                    <NavItem>
                        <NavLink href="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/movies">Movies</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/about">About</NavLink>
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