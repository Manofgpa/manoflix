import React from 'react'
import {
  TopbarContainer,
  Icon,
  CloseIcon,
  TopbarWrapper,
  TopbarMenu,
  TopbarLink,
  TopBtnWrapper,
  TopbarRoute,
} from './TopbarElements'

const Topbar = ({ isOpen, toggle }) => {
  return (
    <TopbarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <TopbarWrapper>
        <TopbarMenu>
          <TopbarLink to='/'>Home</TopbarLink>
          <TopbarLink to='/movies'>Movies</TopbarLink>
          <TopbarLink to='/signup'>Sign up</TopbarLink>
        </TopbarMenu>
        <TopBtnWrapper>
          <TopbarRoute to='login'>Login</TopbarRoute>
        </TopBtnWrapper>
      </TopbarWrapper>
    </TopbarContainer>
  )
}

export default Topbar
