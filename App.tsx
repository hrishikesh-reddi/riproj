
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { BlogPage } from './pages/BlogPage';
import { ResearchPage } from './pages/ResearchPage';
import { AIChat } from './components/AIChat';
import { Navbar } from './components/Navbar';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen selection:bg-cyan-500/30">
        <Navbar />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/research" element={<ResearchPage />} />
          </Routes>
        </main>

        <footer className="py-12 border-t border-white/5 text-center text-white/40 text-sm">
          <p>© 2025 Gavinolla Hrishikesh Reddy. Built with Gemini API & React.</p>
        </footer>

        <AIChat />
      </div>
    </Router>
  );
};

export default App;
