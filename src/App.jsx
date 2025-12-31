import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

// Placeholder Pages
import Home from './pages/Home';
import About from './pages/About';
import WhatWeGrow from './pages/WhatWeGrow';
import Locations from './pages/Locations';
import FarmPlan from './pages/FarmPlan';
import Partnerships from './pages/Partnerships';
import ScrollToTop from './components/common/ScrollToTop';
import Projections from './pages/Projections';
import Contact from './pages/Contact';



function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/what-we-grow" element={<WhatWeGrow />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/farm-plan" element={<FarmPlan />} />
          <Route path="/partnerships" element={<Partnerships />} />
          <Route path="/projections" element={<Projections />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
