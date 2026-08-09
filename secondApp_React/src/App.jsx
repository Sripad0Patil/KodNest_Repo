import React from 'react'
import Navbar from './Components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';

export default function App() {
  return (
    <div>
      <h1>React Routing</h1>
      <Navbar />
      <Routes>
        <Route path = "/home" element = {<Home />}></Route>
        <Route path = "/about" element = {<About />}></Route>
        <Route path = "/contact" element = {<Contact />}></Route>
      </Routes>
    </div>
  )
}
