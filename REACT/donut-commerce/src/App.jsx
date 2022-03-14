import React from 'react';
import { Assortment } from './components/Assortment';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';

export const App = () => {
  return (
    <main>
      <Hero />
      <Assortment />
      <Footer />
    </main>
  )
};
