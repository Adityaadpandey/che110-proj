import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import "./index.css"
import SDGPage from './pages/SDGPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sdg/:slug" element={<SDGPage />} />
      </Routes>
    </Router>
  );
}

export default App;
