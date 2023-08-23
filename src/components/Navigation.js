import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../assets/Logo.png';

export const Navigation = () => {
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
    }
    li a {
        text-decoration: none;
    }
    .active {
    text-decoration: underline;
    font-weight: bold;
  }
`