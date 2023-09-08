/* eslint-disable max-len */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Item } from 'burger-menu';
import 'burger-menu/lib/index.css';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Logo from '../assets/Logo.png';
import { InnerWrapper } from './global/GlobalWrappers';

const SubDropMenu = () => {
  return (
    <DropdownMenu>
      <NavLink to="/products/all">All Products</NavLink>
      <NavLink to="/products/cups">Cups</NavLink>
      <NavLink to="/products/plates">Plates</NavLink>
      <NavLink to="/products/bowls">Bowls</NavLink>
      <NavLink to="/products/other">Other</NavLink>
    </DropdownMenu>
  )
}

const MobileSubDropMenu = () => {
  return (
    <DropdownMenu>
      <NavLink to="/products/all">
        <Item itemKey="all" text="All Products" />
      </NavLink>
      <NavLink to="/products/cups">
        <Item itemKey="cups" text="Cups" />
      </NavLink>
      <NavLink to="/products/plates">
        <Item itemKey="plates" text="Plates" />
      </NavLink>
      <NavLink to="/products/bowls">
        <Item itemKey="bowls" text="Bowls" />
      </NavLink>
      <NavLink to="/products/other">
        <Item itemKey="other" text="Other" />
      </NavLink>
    </DropdownMenu>
  )
}

export const Navigation = () => {
  const [visible, setVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Header>
      <InnerWrapper>
        <LogoAndNavContainer>
          <NavLink to="/">
            <LogoImage src={Logo} alt="Logo" />
          </NavLink>
          <NavBar>
            <ListWrapper>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
                Products
                {visible && <SubDropMenu />}
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ListWrapper>
          </NavBar>
          <MobileNavBar>
            <FontAwesomeIcon onClick={() => setIsOpen(!isOpen)} className="bar-icon" icon={faBars} />
            <Menu className="burger-menu" isOpen={isOpen} selectedKey="entry" onClose={() => setIsOpen(false)}>
              <ul>
                <li>
                  <NavLink to="/">
                    <Item itemKey="home" text="Home" />
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about">
                    <Item itemKey="about" text="About" />
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={() => setVisible((prev) => !prev)}>
                    <Item itemKey="products" text="Products" />
                  </NavLink>
                  {visible && <MobileSubDropMenu />}
                </li>
                <li>
                  <NavLink to="/contact">
                    <Item itemKey="contact" text="Contact" />
                  </NavLink>
                </li>
              </ul>
            </Menu>
          </MobileNavBar>
        </LogoAndNavContainer>
      </InnerWrapper>
    </Header>
  )
}

const Header = styled.header`
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`
const LogoAndNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1.3rem 0;
`
const NavBar = styled.nav`
  @media screen and (max-width: 850px) {
    display: none !important;
  }
`
const LogoImage = styled.img`
    width: 7rem;
    transform: rotate(-40deg);
    display: inline-block;
`
const ListWrapper = styled.ul`
    list-style: none;
    display: flex;
    li {
        padding: 0 15px;   
        position: relative;
    }
    li a {
        text-decoration: none;
        color: #333;
    }
    .active {
    text-decoration: underline;
  }
  a:hover{
    font-weight: 600;
  }
`
const DropdownMenu = styled.ul`
  padding-left: 3rem;
    @media screen and (min-width: 850px) {
      display: flex;
      flex-direction: column;
      position: absolute;
      background-color: rgba(255,255,255, 0.5);
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      padding: 12px 16px;
      z-index: 1;
  }
`
const MobileNavBar = styled.div`
  .burger-menu {
    padding: 10px;
  }
  .bar-icon {
    font-size: 2rem;
  }
  ul {
    list-style: none;
  }
  li a {
        text-decoration: none;
    }
    .active {
    text-decoration: underline;
  }
  @media screen and (min-width: 849px) {
    display: none !important;
  } 
  `