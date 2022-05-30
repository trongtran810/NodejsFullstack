import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('../home/Home'));
const Login = lazy(() => import('../login/Login'));
const Page1 = lazy(() => import('../page1/Page1'));
const Page2 = lazy(() => import('../page2/Page2'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </Suspense>
  </Router>
);

export default App;