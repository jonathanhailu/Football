import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Create from './components/Cerate'
import Edit from './components/Edit'
import Delete from './components/Delete'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<Create />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="/delete/id:" element={<Delete />} />
    </Routes>
  )
}

export default App
