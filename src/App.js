import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Features from './components/Features/Features';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import BlogDetail from './components/Blog/BlogDetail';
import PrivacyPolicy from './components/privacypolicy/privacypolicy';
import './App.css'; 

const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} /> 
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;

