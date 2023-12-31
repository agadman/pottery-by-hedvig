import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import validator from 'validator';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import { InnerWrapper } from './global/GlobalWrappers';
import BackgroundLarge from '../assets/contact_background_large.jpeg';
import BackgroundSmall from '../assets/contact_background_small.jpeg';

export const Contact = () => {
  const [recaptchaValue, setRecaptchaValue] = useState(null);
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

    if (recaptchaValue) {
      emailjs
        .sendForm(
          'service_uck2h3p',
          'template_9hxurzo',
          e.target,
          'L5NEW2-j4ETKz_ULx'
        )
        .then(
          (result) => {
            // show the user a success message
            console.log(result.text);
            setMessage('Email submitted');
          },
          (error) => {
            // show the user an error
            console.log(error.text);
          }
        );
      e.target.reset();
    } else {
      setMessage('Please complete the reCAPTCHA.');
    }
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
                <ReCAPTCHA
                  sitekey="6LfLl0QoAAAAAGQKMXjfgr9Dpj9uWioJXFBvXGGF"
                  onChange={(value) => setRecaptchaValue(value)} />
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
  background: linear-gradient(rgba(82, 81, 81, 0.2), rgba(255, 255, 255, 0.8)), url(${BackgroundSmall});
  background-repeat: no-repeat;background-repeat: no-repeat;
  background-position: center;
  background-size: cover; 
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    background: linear-gradient(rgba(82, 81, 81, 0.2), rgba(255, 255, 255, 0.8)), url(${BackgroundLarge});
    background-repeat: no-repeat;background-repeat: no-repeat;
    background-position: center;
    background-size: cover; 
  }
`
const FormContainer = styled.div`
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
    width: 75%;
    form {
      width: 55%;
    }
  }
  @media screen and (min-width: 768px) {
  width: 70%;
  padding: 8rem 0;
    form {
      width: 50%;
    }
  }
  @media screen and (min-width: 940px) {
    width: 60%;
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
    color: #333;
  }
  button:hover {
    background-color: #A5ADA6;
    color: white;
  }
`