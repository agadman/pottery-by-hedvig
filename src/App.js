import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { OuterWrapper } from 'components/global/GlobalWrappers';
import { Home } from 'components/Home';
import { About } from 'components/About';
import { Products } from 'components/Products';
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
          <Route path="/products" />
          <Route path="/products/:submenuId" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </OuterWrapper>
    </BrowserRouter>
  )
}