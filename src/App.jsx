import React, { useEffect } from 'react';

import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

import { ComingSoon, Home, PlaceToStay } from './pages';

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<ComingSoon />} />
      <Route path="/place-to-stay" element={<PlaceToStay />} />
    </Routes>
  </BrowserRouter>
);
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};
export default App;
