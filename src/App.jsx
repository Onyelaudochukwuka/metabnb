import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, NFT } from './pages';

const App = () => (
  <section>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<NFT />} />
    </Routes>
  </section>
);

export default App;
