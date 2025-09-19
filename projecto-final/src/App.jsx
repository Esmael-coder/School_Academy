import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Home } from './pages/home/Home'
import { Cursos } from './pages/cursos/Cursos.jsx'
import { CursoSinglePage } from './pages/cursoSinglePage/CursoSinglePage.jsx'
import { Metodologia } from './pages/metodologia/Metodologia'
import { Exame } from './pages/exame/Exame.jsx'
import { Contacto } from './pages/contacto/Contacto'
import { Routes, Route } from 'react-router-dom'
import { Footer } from './components/Footer'
import { PoliticaPrivacidade } from './pages/PoliticaPrivacidade/PoliticaPrivacidade.jsx'
import { courses } from './const/Constants.js'
import { Page404 } from './pages/404/Page404.jsx'
import { PoliticaCookie } from './pages/politicaCookie/PoliticaCookie.jsx'
import { AvisoLegal } from './pages/avisoLegal/AvisoLegal.jsx'
import { ScrollToTop } from './components/scrollToTop.jsx'
import { Cadastro } from './pages/cadastro/Cadastro.jsx'
import { Login } from './pages/login/Login.jsx'
import { PortalAluno } from './pages/PortalAluno/PortalAluno.jsx'
import { PrivateRoute } from './components/PrivateRoute.jsx'


function App() {

  const [allCourses, setAllCourses] = useState(courses)

    // Função para filtrar cursos por categoria
    // Está sendo usada na pagina home, cursos e exames
  const handleFilter = (categoryValue) => {

    if (categoryValue !== "todos") {

      setAllCourses(courses.filter(course => course.category == categoryValue))

    } else {

      setAllCourses(courses)
    }
  }

  return (
    <>
      <Header />
      <main className='mt-16 min-h-[100vh]'>
        <ScrollToTop/>
          <Routes>
            <Route path='/' element={<Home setAllCourses={setAllCourses} handleFilter={handleFilter}/>} />
            <Route path='/cursos' element={<Cursos allCourses={allCourses} handleFilter={handleFilter}/>} />
            <Route path='/cursos/:id' element={<CursoSinglePage />} />
            <Route path='/metodologia' element={<Metodologia />} />
            <Route path='/exame' element={<Exame handleFilter={handleFilter}/>} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='/politica-privacidade' element={<PoliticaPrivacidade />} />
            <Route path='/politica-cookie' element={<PoliticaCookie />} />
            <Route path='/aviso-legal' element={<AvisoLegal />} />
            <Route path='/cadastro' element={<Cadastro />} />
            <Route path='/login' element={<Login />} />
            {/* enviando essa pagina como children para ser renderizada se existir token */}
            <Route path='/portal-aluno' element={<PrivateRoute><PortalAluno/></PrivateRoute>}/> 
            <Route path='*' element={<Page404 />} />
          </Routes>
      </main>
      <Footer/>

    </>
  )
}

export default App
