import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { OuterWrapper } from 'components/global/GlobalWrappers';
import { Home } from 'components/Home';
import { About } from 'components/About';
import { Products } from 'components/Products';
import { Contact } from 'components/Contact';
import { Navigation } from 'components/Navigation';
import { Footer } from 'components/Footer';
import { NotFound } from 'components/errors/404';

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
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </OuterWrapper>
    </BrowserRouter>
  )
}