import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Register, Login, MemberList, AddMember, MemberDetail } from '../../pages';

const Navigation = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Register/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="member-list" element={<MemberList/>}/>
          <Route path="add-member" element={<AddMember/>}/>
          <Route path="member-detail/:id" element={<MemberDetail/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default Navigation;