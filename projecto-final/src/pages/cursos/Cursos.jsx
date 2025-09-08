import React, { useState, useEffect } from 'react'
import { CiFilter } from "react-icons/ci";
import { HeroDiv } from '../../components/HeroDiv'
import imagem1 from '../../assets/imagem1.jpg'
import { courses } from '../../const/Constants'
import { CourseCard } from '../../components/CourseCard'
import { BoxModal } from '../../components/BoxModal';

const coursesCopy = [...courses]

export const Cursos = () => {

  const [allCourses, setAllCourses] = useState(coursesCopy)

  // função para filtrar cursos por categoria
  const handleFilter = (categoryValue) => {

    if (categoryValue !== "todos") {

      setAllCourses(coursesCopy.filter(course => course.category == categoryValue))

    } else {

      setAllCourses(coursesCopy)
    }
  }

  const [isActive, setIsActive] = useState("todos")

  // função para alterar estado das categorias ativas
  const changeActive = (id) => {
    setIsActive(id)
  }

  // css inline para os links ativos e não ativos
  const activeLink = {
    borderRadius: "10px",
    color: "#0047fc",
    backgroundColor: "#e6f0f9",
    padding: "8px 12px 8px 12px",
    border: "1px solid #0047fc",
    cursor: "pointer",
    whiteSpace: "nowrap"
  }

  const link = {
    borderRadius: "10px",
    padding: "8px 12px 8px 12px",
    border: "1px solid #e6f0f9",
    backgroundColor: "#e6f0f9",
    cursor: "pointer",
    whiteSpace: "nowrap"
  }


  return (
    <>
      {/* hero section */}
      <section className='bg-secondary'>
        <div className='max-w-7xl w-full mx-auto px-4 py-16 lg:px-8'>
          <HeroDiv imagem={imagem1} percentage={"50%"} text={"Taxa de sucesso"} className='bg-secondary' />
        </div>
      </section>

      {/* Cursos */}
      <section>
        <header className='w-full py-5 shadow-lg'>
          <div className='max-w-7xl w-full mx-auto px-4 md:px-6 lg:px-8'>

            <div className='flex gap-4 items-center md:hidden'>
              <label className='text-[19px] font-semibold' htmlFor="filter">Filtrar</label>
              <select className='border border-cinza rounded-sm' name="filter" id="filter" onChange={(event) => handleFilter(event.target.value)}>
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

            <nav className='hidden md:flex w-full list-none justify-between gap-8 text-primary overflow-x-auto'>
              <li
                id="todos"
                style={isActive == "todos" ? activeLink : link}
                onClick={(event) => {
                  handleFilter(event.target.id),
                    changeActive(event.target.id)
                }}>
                Todos os cursos
              </li>

              <li
                id="concurso público"
                style={isActive == "concurso público" ? activeLink : link}
                onClick={(event) => {
                  handleFilter(event.target.id),
                    changeActive(event.target.id)
                }}>
                Concursos
              </li>

              <li
                id="segurança pública"
                style={isActive == "segurança pública" ? activeLink : link}
                onClick={(event) => {
                  handleFilter(event.target.id),
                    setIsActive(event.target.id)
                }}>
                Segurança Pública
              </li>

              <li
                id="saúde"
                style={isActive == "saúde" ? activeLink : link}
                onClick={(event) => {
                  handleFilter(event.target.id),
                    changeActive(event.target.id)
                }}>
                Saúde
              </li>

              <li
                id="gestão"
                style={isActive == "gestão" ? activeLink : link}
                onClick={(event) => {
                  handleFilter(event.target.id),
                    changeActive(event.target.id)
                }}>
                Gestão
              </li>

              <li
                id="informática"
                style={isActive == "informática" ? activeLink : link}
                onClick={(event) => {
                  handleFilter(event.target.id),
                    changeActive(event.target.id)
                }}>
                Informática
              </li>

              <li
                id="energia renovável"
                style={isActive == "energia renovável" ? activeLink : link}
                onClick={(event) => {
                  handleFilter(event.target.id),
                    changeActive(event.target.id)
                }}>
                Energia Renovável
              </li>

              <li
                id="mecânica"
                style={isActive == "mecânica" ? activeLink : link}
                onClick={(event) => {
                  handleFilter(event.target.id),
                    changeActive(event.target.id)
                }}>
                Mecânica
              </li>
            </nav>

          </div>
        </header>

        <div className='max-w-7xl w-full min-h-[75vh] mx-auto px-4 lg:px-8 gap-8 m-10'>
          <div>
            <h1 className='font-bold text-3xl lg:text-4xl text-primary text-center mb-10'>Cursos Certificados</h1>
          </div>


          <div className='flex flex-col items-center gap-5 md:grid sm:grid-cols-2 lg:grid-cols-3'>
            {
              allCourses.map(course => (
                <CourseCard
                  key={course.id}
                  id={course.id}
                  image={course.image}
                  name={course.name}
                  example={course.example}
                  duration={course.duration}
                  description={course.description} />
              ))
            }
          </div>
        </div>
        <footer className='my-30'>
          <div className='max-w-7xl w-full mx-auto px-4 md:px-6 lg:px-8'>
            <BoxModal
              title={"Comece hoje a construir o seu futuro"}
              text={"Não deixe para amanhã o que pode começar hoje."}
              link1Content={"Ligar"}
              link2Content={"Enviar mensagem"}
            />
          </div>
        </footer>
      </section>
    </>
  )
}
