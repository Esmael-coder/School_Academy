import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Home } from './pages/home/Home'
import { Cursos } from './pages/cursos/Cursos.jsx'
import { CursoSinglePage } from './pages/cursoSinglePage/CursoSinglePage.jsx'
import { Metodologia } from './pages/metodologia/Metodologia'
import { Sobre } from './pages/Sobre/Sobre'
import { Exame } from './pages/exame/exame.jsx'
import { Contacto } from './pages/contacto/Contacto'
import { Routes, Route } from 'react-router-dom'
import { Footer } from './components/Footer'

function App() {

  return (
    <>
      <Header />
      <main className='mt-16 min-h-[100vh]'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cursos' element={<Cursos />} />
            <Route path='/cursos/:id' element={<CursoSinglePage />} />
            <Route path='/metodologia' element={<Metodologia />} />
            <Route path='/exame' element={<Exame />} />
            <Route path='/sobre' element={<Sobre />} />
            <Route path='/contacto' element={<Contacto />} />
          </Routes>
      </main>
      <Footer/>

    </>
  )
}

export default App
