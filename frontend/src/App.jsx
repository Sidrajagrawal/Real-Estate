import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import BuyPage from './Components/Buy/BuyPage';
import SellPage from './Components/Sell/SellPage';
import PropertyDetail from './Components/Buy/PropertyDetail';
import Login from './Components/Auth/Login';

import RequireAuth from './utils/RequireAuth';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<BuyPage />} />
                <Route path="/sell" element={
                    <RequireAuth>
                        <SellPage />
                    </RequireAuth>
                } />
        <Route path="/property/:id" element={<PropertyDetail />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;