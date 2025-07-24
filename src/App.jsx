import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import FinalReflection from './components/FinalReflection';
import Gallery from './components/Gallery';
import MedalsAndRank from './components/MedalsAndRank';
import ImpactWall from './components/ImpactWall';
import FamilyTribute from './components/FamilyTribute';
import LegacyMetrics from './components/LegacyMetrics';
import Guestbook from './components/Guestbook';
import Footer from './components/Footer';
import AdminDashboard from './components/AdminDashboard';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-pearl-50">
        <Routes>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/" element={<MainSite />} />
        </Routes>
      </div>
    </Router>
  );
}

function MainSite() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Navigation />
      <Hero />
      <Timeline />
      <FinalReflection />
      <Gallery />
      <MedalsAndRank />
      <ImpactWall />
      <FamilyTribute />
      <LegacyMetrics />
      <Guestbook />
      <Footer />
    </motion.div>
  );
}

export default App;