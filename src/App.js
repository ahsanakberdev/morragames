import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

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
        {/* <Route path='/archive' element={<Archive />} /> */}
        {/* <Route path='/partner' element={<Partner />} /> */}
        {/* <Route path='/news1' element={<News1 />} /> */}
        {/* <Route path='/news2' element={<News2 />} /> */}
        {/* <Route path='/contact' element={<Contact />} /> */}
        <Route path='/karnak-legacy' element={<Games1 />} />
        <Route path='/mythya' element={<Games2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

