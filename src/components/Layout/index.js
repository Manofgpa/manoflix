import Header from './Header'
import Footer from './Footer'
import styled from 'styled-components'
import React, { Fragment } from 'react'
import { Container } from '../../assets/style'


const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Fragment>
  )
}

export default Layout

const Main = styled.main`
  flex: 1;
`
