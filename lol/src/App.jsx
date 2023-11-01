import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HomePage } from './Components/HomePage/HomePage'
import BasicExample from './Components/NavBar/Navbar'
import { Creacion } from './Components/Creacion/Creacion'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/Creacion" element={<Creacion/>}></Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
