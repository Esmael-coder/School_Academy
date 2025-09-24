
import React from 'react'
import { courses } from '../const/Constants'
import { BiTimeFive } from 'react-icons/bi'
import { Link } from 'react-router-dom'

export const CourseCard = (props) => {
  const { id, image, name, example, description, duration, modality } = props
  return (

    <div className='rounded-lg shadow-[var(--boxShadow2)] text-gray-600 max-w-[450px] md:w-full'>
      <div className='p-5'>
        <img className='rounded-tl-lg rounded-tr-lg object-cover w-full' src={image} alt="imagem do curso" />
      </div>

      <div className='px-5 pb-5'>
        <div className='mb-3'>
          <h3 className='font-semibold text-xl text-primary whitespace-nowrap'>{name}</h3>
          <p className='text-gray-600'>{example}</p>
        </div>

        <p className='text-gray-700'>{description}</p>

        <div className='flex items-center text-hightlight gap-5'>
          <div className='flex items-center gap-1 my-3 bg-secondary border border-realce rounded p-1'>
            <BiTimeFive />
            <span>{duration}</span>
          </div>

          <span className='bg-secondary border border-realce rounded p-1'>{modality}</span>
        </div>


        <Link
          className='bg-orange hover:bg-Sombra p-2 rounded-lg text-white flex justify-center'
          to={`/cursos/${id}`}>Mais informações
        </Link>


      </div>

    </div>
  )
}
