import React from 'react'
import {BrowserRouter, Route, Routes} from'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Dashboard from './Dashboard'
import Profile from './Profile'
import CommitHistory from './CommitHistory'

const Github_Details = () => {
  return (
    <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/user' element={<Profile/>}/>
        <Route path='/commit_history' element={<CommitHistory/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default Github_Details