import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { IconLinks } from './components/IconLinks';
import { About } from './pages/About';
import { GameTheory } from './pages/GameTheory';

function Home() {
  return (
    <div className="relative min-h-screen">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://i.imgur.com/6XHQkmY.png)',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#000',
        }}
      />
      
      <div className="relative z-10 min-h-screen flex flex-col bg-black/50">
        <main className="flex-grow">
          <IconLinks />
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gametheory" element={<GameTheory />} />
      </Routes>
    </Router>
  );
}

export default App;