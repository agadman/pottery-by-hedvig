/* eslint-disable max-len */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../assets/Logo.png';

const SubMenu = () => {
  return (
    <DropdownMenu>
      <NavLink to="/products">Cups</NavLink>
      <NavLink to="products">Plates</NavLink>
    </DropdownMenu>
  )
}

export const Navigation = () => {
  const [visible, setVisible] = useState(false);

  return (
    <NavBar>
      <NavLink to="/">
        <LogoImage src={Logo} alt="Logo" />
      </NavLink>
      <ListWrapper>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li onMouseLeave={() => setVisible(false)}>
          <NavLink onMouseEnter={() => setVisible(true)}>Products</NavLink>
          {visible && <SubMenu />}
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ListWrapper>
    </NavBar>
  )
}

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 3%;
  background-color: var(--color-beige);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
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
    }
    .active {
    text-decoration: underline;
    font-weight: bold;
  }
`
const DropdownMenu = styled.ul`
    display: flex;
    flex-direction: column;
    position: absolute;
    background-color: rgba(255,255,255, 0.5);
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    padding: 12px 16px;
    z-index: 1;
`