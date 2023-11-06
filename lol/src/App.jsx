import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HomePage } from './Components/HomePage/HomePage'
import BasicExample from './Components/NavBar/Navbar'
import { Creacion } from './Components/Creacion/Creacion'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Favoritos } from './Components/Favoritos/Favoritos'
import {FavoritosProvider} from './Components/Context/CreacionesContext'
function App() {
  return (
    <>
    <FavoritosProvider>
      <BrowserRouter className="lol">
      <BasicExample/>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/Creacion" element={<Creacion/>}></Route>
          <Route path="/Favoritos" element={<Favoritos/>}></Route>

        </Routes>
      </BrowserRouter>
      </FavoritosProvider>
    </>
  )
}

export default App
