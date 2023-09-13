import React, { useState } from 'react';
import validator from 'validator';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import { InnerWrapper } from './global/GlobalWrappers';
import Background from '../assets/contact_background_desktop.jpeg';

export const Contact = () => {
  const [message, setMessage] = useState('');
  const validateEmail = (e) => {
    const email = e.target.value;

    if (validator.isEmail(email)) {
      setMessage('Thank you');
    } else {
      setMessage('Please, enter valid Email!');
    }
  }
  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    emailjs.sendForm('service_uck2h3p', 'template_9hxurzo', e.target, 'L5NEW2-j4ETKz_ULx')
      .then((result) => {
        // show the user a success message
        console.log(result.text);
        setMessage('Email submitted');
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
            <h2>Contact me</h2>
            <p>Find anything you like? Reach out and lets chat.</p>
            <form onSubmit={sendEmail}>
              <InputWrapper>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name" />
                <input
                  type="text"
                  name="email"
                  placeholder="Your email"
                  onChange={(e) => validateEmail(e)} />
                <input
                  type="text"
                  name="message"
                  placeholder="Your message" />
                <button type="submit">SEND</button>
                <span>{message}</span>
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
  // background-color: rgba(255,255,255, 0.8);
  background-color: rgba(241, 238, 235, 0.9);
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
    margin-top: 20px;
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

  button {
    background-color: rgba(241, 238, 235, 0.9);
    padding: 8px 30px;
    border-radius: 2rem;
    border: 2px solid #A5ADA6;
    margin-top: 20px;
  }
  button:hover {
    background-color: #A5ADA6;
    color: white;
  }
`