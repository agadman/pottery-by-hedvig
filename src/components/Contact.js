import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import { InnerWrapper } from './global/GlobalWrappers';
import Background from '../assets/contact_background_desktop.jpeg'

export const Contact = () => {
  const [name, setName] = useState('Your name');
  const [email, setEmail] = useState('Your email');
  const [message, setMessage] = useState('Your message');

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”
    alert(`Name: ${name}, Email: ${email}, Message: ${message}`)

    emailjs.sendForm('service_qm4xuqr', 'template_0b6sl99', e.target, 'uAroP6FRQlvQh6K9E')
      .then((result) => {
        // show the user a success message
        console.log(result.text);
      }, (error) => {
        // show the user an error
        console.log(error.text);
      });
    e.target.reset();
  };

  return (
    <BackgroundImg>
      <InnerWrapper>
        <Content>
          <FormContainer>
            <h2>Contact me for orders</h2>
            <form ref={form} onSubmit={sendEmail}>
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
                <button type="submit">SUBMIT</button>
              </InputWrapper>
            </form>
          </FormContainer>
        </Content>
      </InnerWrapper>
    </BackgroundImg>
  )
}

const Content = styled.main`
    width: 100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5rem 0;
`
const BackgroundImg = styled.div`
  width: 100%;
  height: auto;
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
  /*background-color: rgba(249, 249, 234, 0.8);*/
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5rem 0;
  margin: 8rem 0;
  border-radius: 5%;
  form {
    width: 75%;
  }

  @media screen and (min-width: 640px) {
  form {
    width: 55%;
  }
  }

  @media screen and (min-width: 768px) {
  width: 50%;
  padding: 8rem 0;

  form {
    width: 50%;
  }
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
    width: 100%;
  }
`