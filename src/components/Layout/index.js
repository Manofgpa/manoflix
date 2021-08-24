import Header from "./Header"
import Footer from "./Footer"
import styled from 'styled-components'
import React from 'react'


const Layout = ({ children }) => {

    return (
        <div>
            <Header />
            <Main>
                {children}
            </Main>
            <Footer />
        </div>
    )
}

export default Layout

const Main = styled.div`
    flex: 1;
`