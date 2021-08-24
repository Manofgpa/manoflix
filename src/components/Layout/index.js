import Header from "./Header"
import Footer from "./Footer"
import styled from 'styled-components'
import React from 'react'
import { Container } from '../../assets/style'


const Layout = ({ children }) => {

    return (
        <Container>
            <Header />
            <Main>
                {children}
            </Main>
            <Footer />
        </Container>
    )
}

export default Layout

const Main = styled.main`
    flex: 1;
`

