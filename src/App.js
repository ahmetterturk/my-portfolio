import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import Footer from './components/Footer/Footer';
import Cards from './components/Cards/Cards';

const App = () => {
  return (
    <>
      {/* <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router> */}
      <Navbar />
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
};

export default App;
