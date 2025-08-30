
import React from 'react'
import { courses } from '../const/Constants'
import { BiTimeFive } from 'react-icons/bi'
import { Link } from 'react-router-dom'

export const CourseCard = (props) => {
  const { image, name, example, description, duration } = props
  return (

    <div className='rounded-lg shadow-[var(--boxShadow)] text-cinza max-w-[450px] md:w-full'>
      <div className='p-5'>
        <img className='rounded-tl-lg rounded-tr-lg object-cover w-full' src={image} alt="imagem do curso" />
      </div>

      <div className='px-5 pb-5'>
        <div className='mb-3'>
          <h3 className='font-semibold text-xl text-primary whitespace-nowrap'>{name}</h3>
          <p className='text-cinza'>{example}</p>
        </div>

        <p className='text-gray-700'>{description}</p>
        <div className='flex items-center gap-1 my-3'>
          <BiTimeFive />
          <p>{duration}</p>
        </div>


        <Link
          className='bg-orange hover:bg-Sombra p-2 rounded-lg text-white flex justify-center'
          to="/">Mais informaçoes
        </Link>


      </div>

    </div>
  )
}
