import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Home } from './pages/home/Home'
import { Cursos } from './pages/cursos/cursos'
import { Metodologia } from './pages/metodologia/Metodologia'
import { Sobre } from './pages/Sobre/Sobre'
import { Contacto } from './pages/contacto/Contacto'
import { Routes, Route } from 'react-router-dom'
import { Footer } from './components/Footer'

function App() {

  return (
    <>
      <Header />
      <main>
        <div className='mt-16'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cursos' element={<Cursos />} />
            <Route path='/metodologia' element={<Metodologia />} />
            <Route path='/sobre' element={<Sobre />} />
            <Route path='/contacto' element={<Contacto />} />
          </Routes>
        </div>
      </main>
      <Footer/>

    </>
  )
}

export default App
