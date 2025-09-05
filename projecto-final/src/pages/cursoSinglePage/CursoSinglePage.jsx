import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { HeroDiv } from '../../components/HeroDiv'
import { courses } from '../../const/Constants'
import { Link } from 'react-router-dom'
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { BiHome } from 'react-icons/bi'
import { FaRegCheckCircle } from "react-icons/fa";
import { CgEditBlackPoint } from "react-icons/cg";

export const CursoSinglePage = () => {
  const { id } = useParams()

  const selectedCourse = (courses.find(course => course.id == id))


  return (
    <>
      <section>
        <header className='w-full fixed top-16 bg-primary h-10 text-white whitespace-nowrap'>
          <nav className='w-full h-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex justify-between items-center'>
            <div className='hidden md:flex gap-2'>
              <Link
                className='flex items-center gap-1'
                to={"/"}>
                <BiHome />
                Home /
              </Link>

              <Link to={"/cursos"}>Cursos /</Link>
              {selectedCourse.name}
            </div>

            <Link
              className='flex items-center gap-2'
              to={"/cursos"}>
              <MdOutlineKeyboardBackspace />
              Voltar aos cursos
            </Link>
          </nav>
        </header>
      </section>

      <section className='mt-[104px]'>
        <div className='w-full max-w-7xl py-10 mx-auto px-4 md:px-6 lg:px-8'>
          <h1 className='font-bold text-primary text-2xl mb-3'>{selectedCourse.name}</h1>
          <p className='text-cinza text-xl mb-3'>{selectedCourse.description}</p>
          <p className='mb-6'>{selectedCourse.descriptionLong}</p>
          <img className='w-full rounded-xl' src={selectedCourse.image} alt={selectedCourse.name} />
        </div>
      </section>

      <section>
        <div className='w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8'>
          <h1 className='font-bold text-primary text-2xl mb-3'>Porquê escolher este curso?</h1>
          <ul>
            {selectedCourse.advantages.map((advantage, index) => (
              <li
                key={index}
                className='flex items-center gap-2 mb-1'>
                <FaRegCheckCircle />
                {advantage}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <div className='w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8'>
          <h1>O que Vai Aprender</h1>
          <p>O nosso programa abrangente cobre todas as tecnologias essenciais para se tornar um profissional completo:</p>

          <div>
            <ul className='flex flex-col gap-4'>
              {
                selectedCourse.program.map((prog, index) => (
                  <li
                    key={index}
                    className='flex items-center gap-2 p-4 bg-sombra rounded-md'>
                    <span className='w-5 h-5 rounded-full bg-orange text-white flex items-center justify-center'>
                      {index + 1}
                    </span>
                    {prog}
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className='w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8'>
          <h1>Oportunidades de carreira</h1>
          <p>Com as competências adquiridas neste curso, poderá candidatar-se a diversos cargos profissionais.</p>

          <ul className='flex flex-col gap-2'>
            {selectedCourse.careers.map((career, index) => (
              <li
                className='flex items-center gap-2'
                key={index}>
                <CgEditBlackPoint size={20} className='text-orange' />
                {career}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
