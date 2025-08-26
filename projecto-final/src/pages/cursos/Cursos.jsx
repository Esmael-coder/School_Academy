import React, {useState, useEffect} from 'react'
import { HeroDiv } from '../../components/HeroDiv'
import imagem1 from '../../assets/imagem1.jpg'
import { courses } from '../../const/Constants'
import {CourseCard} from '../../components/CourseCard'

export const Cursos = () => {
  
  const [allCourses, setAllCourses] = useState([])
  
  useEffect(()=>{
    setAllCourses(courses.filter(()=> true))
  },[])
  console.log(allCourses)

  return (
    <>
    {/* hero section */}
      <section>
        <div className='max-w-7xl w-full mx-auto px-4 py-16 lg:px-8 bg-ice'>
          <HeroDiv imagem={imagem1} percentage={"50%"} text={"Taxa de sucesso"} className='bg-ice'/>
        </div>
      </section>

     {/* Cursos */}
      <section>
        <div className='max-w-7xl mx-auto px-4 lg:px-8 gap-8 shadow-lg'>
          <header className='w-full py-5'>
            <div className='flex items-center gap-4'>
              <label htmlFor="filter">Filtrar</label>
              <select name="filter" id="filter" className='border-2 border-primary p-1'>
                <option defaultValue={"todos os cursos"} value="todos">Todos os cursos</option>
                <option value="concurso público">Concursos</option>
                <option value="segurança publica">Segurança Pública</option>
                <option value="saúde">Saúde</option>
                <option value="gestão">Gestão</option>
                <option value="informática">Informática</option>
                <option value="energia Renóvavel">Energia Renovável</option>
                <option value="mecânica">Mecânica</option>
              </select>
            </div>
          </header>
        </div>
        <div className='max-w-7xl mx-auto px-4 lg:px-8 gap-8 mt-16'>
          <h1 className='font-bold text-2xl text-center mb-10'>Cursos Certificados</h1>
        </div>

        <div>
          {
            allCourses.map(course =>(
              <CourseCard key={course.id} image={course.image} name={course.name} example={course.example} duration={course.duration} description={course.description}/>
            ))
          }
        </div>
      </section>
    </>
  )
}
