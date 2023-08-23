import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { OuterWrapper } from 'components/global/GlobalWrappers';
import { Home } from 'components/Home';
import { About } from 'components/About';
import { Contact } from 'components/Contact';
import { Navigation } from 'components/Navigation';
import { Footer } from 'components/Footer';

export const App = () => {
  return (
    <BrowserRouter>
      <OuterWrapper>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </OuterWrapper>
    </BrowserRouter>
  )
}