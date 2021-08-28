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

function Topbar() {
  return (
    <TopbarContainer>
      <Icon>
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
