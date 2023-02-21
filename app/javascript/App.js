import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// import NavBar from './components/NavBar';
// import CryptoList from './pages/CryptoList';
// import CryptoDetails from './pages/CryptoDetails';
import Greeting from './Greeting';
import NoMatch from './NoMatch';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Greeting />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
}

export default App;