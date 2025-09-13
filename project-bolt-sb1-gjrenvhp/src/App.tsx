import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Vision from './components/Vision';
import EarlyAccess from './components/EarlyAccess';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <Vision />
      <EarlyAccess />
      <Footer />
    </div>
  );
}

export default App;