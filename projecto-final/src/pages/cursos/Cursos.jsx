import React, { useState } from 'react'
import { CiFilter } from "react-icons/ci";
import { HeroDiv } from '../../components/HeroDiv'
import imagem1 from '../../assets/imagem1.jpg'
import { courses } from '../../const/Constants'
import { CourseCard } from '../../components/CourseCard'


export const Cursos = () => {

  const coursesCopy = [...courses]
  const [allCourses, setAllCourses] = useState(coursesCopy)


  const handleFilter = (categoryValue) => {

    console.log(categoryValue)

    if (categoryValue !== "todos") {

      setAllCourses(coursesCopy.filter(course => course.category == categoryValue))

    } else {

      setAllCourses(coursesCopy)
    }
  }

  return (
    <>
      {/* hero section */}
      <section className='bg-ice'>
        <div className='max-w-7xl w-full mx-auto px-4 py-16 lg:px-8'>
          <HeroDiv imagem={imagem1} percentage={"50%"} text={"Taxa de sucesso"} className='bg-ice' />
        </div>
      </section>

      {/* Cursos */}
      <section>
        <header className='w-full py-5 shadow-lg'>
          <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8'>

            <div className='flex gap-4 items-center md:hidden'>
              <label className='text-[19px] font-semibold' htmlFor="filter">Filtrar</label>
              <select className='border border-cinza-2 rounded-sm' name="filter" id="filter" onChange={(event) => handleFilter(event.target.value)}>
                <option defaultValue={true} value="todos">Todos os cursos</option>
                <option value="concurso público">Concursos</option>
                <option value="segurança pública">Segurança Pública</option>
                <option value="saúde">Saúde</option>
                <option value="gestão">Gestão</option>
                <option value="informática">Informática</option>
                <option value="energia renovável">Energia Renovável</option>
                <option value="mecânica">Mecânica</option>
              </select>
            </div>

            <nav className='flex list-none justify-between text-primary'>
              <li
                className='cursor-pointer'
                id="todos"
                onClick={(event) => handleFilter(event.target.id)}>
                Todos os cursos
              </li>

              <li
                className='cursor-pointer'
                id="concurso público"
                onClick={(event) => handleFilter(event.target.id)}>
                Concursos
              </li>

              <li
                className='cursor-pointer'
                id="segurança pública"
                onClick={(event) => handleFilter(event.target.id)}>
                Segurança Pública
              </li>

              <li
                className='cursor-pointer'
                id="saúde"
                onClick={(event) => handleFilter(event.target.id)}>
                Saúde
              </li>

              <li
                className='cursor-pointer'
                id="gestão"
                onClick={(event) => handleFilter(event.target.id)}>
                Gestão
              </li>

              <li
                className='cursor-pointer'
                id="informática"
                onClick={(event) => handleFilter(event.target.id)}>
                Informática
              </li>

              <li
                className='cursor-pointer'
                id="energia renovável"
                onClick={(event) => handleFilter(event.target.id)}>
                Energia Renovável
              </li>

              <li
                className='cursor-pointer'
                id="mecânica"
                onClick={(event) => handleFilter(event.target.id)}>
                Mecânica
              </li>
            </nav>

          </div>
        </header>

        <div className='max-w-7xl w-full min-h-[75vh] mx-auto px-4 lg:px-8 gap-8 m-10'>
          <div>
            <h1 className='font-bold text-2xl text-center mb-10'>Cursos Certificados</h1>
          </div>


          <div className='flex flex-col items-center gap-5 md:grid sm:grid-cols-2 lg:grid-cols-3'>
            {
              allCourses.map(course => (
                <CourseCard
                  key={course.id}
                  image={course.image}
                  name={course.name}
                  example={course.example}
                  duration={course.duration}
                  description={course.description} />
              ))
            }
          </div>


        </div>
      </section>
    </>
  )
}
