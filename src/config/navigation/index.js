import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Register, Login } from '../../pages';

const Navigation = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Register/>}/>
          <Route path="login" element={<Login/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default Navigation;