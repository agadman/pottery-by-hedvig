import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import Logo from '../assets/Logo.png';

export const Footer = () => {
  return (
    <FooterSection>
      <LogoWrapper>
        <LogoImage src={Logo} alt="Logo" />
      </LogoWrapper>
      <SocialMediaWrapper>
        <a
          href="https://github.com/agadman"
          target="_blank"
          rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="2x" color="var(--color-dark-grey)" />
        </a>
      </SocialMediaWrapper>
    </FooterSection>
  )
}

const FooterSection = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: var(--color-blue);
    width: 100%;
    padding: 4%;
`
const LogoWrapper = styled.div`
    padding: 1%;
`
const LogoImage = styled.img`
    width: 7rem;
    transform: rotate(-40deg);
`
const SocialMediaWrapper = styled.div`
    padding: 1%;
`

