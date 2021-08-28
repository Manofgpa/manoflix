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
          <TopbarLink to='/' onClick={toggle}>
            Home
          </TopbarLink>
          <TopbarLink to='/movies' onClick={toggle}>
            Movies
          </TopbarLink>
          <TopbarLink to='/signup' onClick={toggle}>
            Sign up
          </TopbarLink>
        </TopbarMenu>
        <TopBtnWrapper>
          <TopbarRoute to='login' onClick={toggle}>
            Login
          </TopbarRoute>
        </TopBtnWrapper>
      </TopbarWrapper>
    </TopbarContainer>
  )
}

export default Topbar
