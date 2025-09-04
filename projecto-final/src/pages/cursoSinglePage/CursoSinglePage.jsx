import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { HeroDiv } from '../../components/HeroDiv'
import { courses } from '../../const/Constants'

export const CursoSinglePage = () => {
  const { id } = useParams()
  
 const selectedCourse = (courses.find(course => course.id == id))


  return (
    <>
      {/* hero section */}
      <section className='bg-secondary'>
        <div className='max-w-7xl w-full mx-auto px-4 py-16 lg:px-8'>
          <HeroDiv imagem={selectedCourse.image} percentage={selectedCourse.name} />
        </div>
      </section>
    </>
  )
}
