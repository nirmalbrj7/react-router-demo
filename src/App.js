import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';  // Make sure to include the CSS file

const App = () => {
  const [visits, setVisits] = useState(0);

  return (
    <Router>
      <div className="container">
        <nav className="vertical-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <div className="content">
        <Routes>
            <Route path="/" element={<Home visits={visits} setVisits={setVisits} />} />
            <Route path="/about" element={<About visits={visits} />} />
            <Route path="/contact" element={<Contact visits={visits} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
