import React, { useState } from 'react';
import styled from 'styled-components';
import { InnerWrapper } from './global/GlobalWrappers';
import Background from '../assets/contact_background_desktop.jpeg'

export const Contact = () => {
  const [name, setName] = useState('Your name');
  const [email, setEmail] = useState('Your email');
  const [message, setMessage] = useState('Your message');

  return (
    <BackgroundImg>
      <InnerWrapper>
        <FormContainer>
          <h2>Contact me for orders</h2>
          <form onSubmit={(event) => event.preventDefault()}>
            <InputWrapper>
              <input
                type="text"
                onChange={(event) => setName(event.target.value)}
                value={name} />
              <input
                type="text"
                onChange={(event) => setEmail(event.target.value)}
                value={email} />
              <input
                type="text"
                onChange={(event) => setMessage(event.target.value)}
                value={message} />
            </InputWrapper>
          </form>
        </FormContainer>
      </InnerWrapper>
    </BackgroundImg>
  )
}

const BackgroundImg = styled.div`
  width: 100%;
  height: 70vh;
  background: linear-gradient(rgba(82, 81, 81, 0.2), rgba(255, 255, 255, 0.8)), url(${Background});
  background-repeat: no-repeat;background-repeat: no-repeat;
  background-position: center;
  background-size: cover; 
  display: flex;
  justify-content: center;
  align-items: center;
`
const FormContainer = styled.div`
  background-color: rgba(255,255,255, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 2rem;
  border-radius: 5%;

  @media screen and (min-width: 768px) {
  width: 50%;
  padding: 5rem;
  }
`
const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  input {
    border: none;
    border-bottom: 2px solid #333;
    background-color: transparent;
    padding: 5px 0;
    margin-bottom: 20px;
  }
`