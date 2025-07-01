import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import Index from './pages/Index';
import Games1 from './pages/Games1';
import Games2 from './pages/Games2';

import ProgressBar from './Components/ProgressBar';

const App = () => {
  return (
    <BrowserRouter basename="/morragames">
      <ProgressBar />
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/karnak-legacy' element={<Games1 />} />
        <Route path='/mythya' element={<Games2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
