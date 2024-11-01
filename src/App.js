import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './pages/Welcome';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Welcome />} />
    </Routes>
  </Router>
  );
}

export default App;
