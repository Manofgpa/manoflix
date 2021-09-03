import Header from './Header'
import Footer from './Footer'
import styled from 'styled-components'
import React from 'react'


const Layout = ({ children }) => {


  return (
    <Container>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Container>
  )
}

export default Layout

const Main = styled.main`
  flex: 1;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  `
