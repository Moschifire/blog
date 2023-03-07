import React from 'react'
import "./App.css";
import Blog from './pages/Blog';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className='container'>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/blog/:id" element={<Blog />} exact />
      </Routes>
    </div>
  )
}

export default App