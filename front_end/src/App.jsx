import React from 'react'
import Login from './user/Login'
import Register from './user/Register'
import { Route, Routes } from 'react-router-dom'
import Home from './user/Home'

function App() {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
    </div>
  )
}

export default App