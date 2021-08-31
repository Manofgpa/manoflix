import { Link } from '@reach/router'
import styled from 'styled-components'

export const Nav = styled.nav`
  background: #0d0d0d;
  height: 80px;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 768px) {
    transition: 0.8s all ease;
  }
`

export const LogoContainer = styled.div`
  flex: 1;
`

export const NavLogo = styled(Link)`
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  align-items: center;
  text-decoration: none;
  font-weight: bold;
  margin-left: 1.5em;
  display: flex;
  flex: 1;
`

export const NavLink = styled(Link)`
  cursor: pointer;
  color: #fff;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  align-self: center;

  &:hover {
    color: #d52941;
    text-decoration: none;
  }
`

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    font-size: 1.8rem;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    cursor: pointer;
    color: #fff;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-self: flex-end;
  list-style: none;
  text-align: center;
  margin-right: 1.5em;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavItem = styled.li`
  font-size: 1.8em;
`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
  margin-right: 1.5em;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavBtnLink = styled(Link)`
  border-radius: 50px;
  background: #d52941;
  white-space: nowrap;
  padding: 1.2em;
  color: #fff;
  font-size: 1.2em;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2 ease-in-out;
  text-decoration: none;
  margin: 0 0.25em;
  height: 30px;
  align-items: center;
  text-decoration: none;
  display: flex;

  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: #fff;
    color: #d52941;
    text-decoration: none;
  }
`
