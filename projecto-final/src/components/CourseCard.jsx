
import React from 'react'
import { courses } from '../const/Constants'
import { BiTimeFive } from 'react-icons/bi'
import { Link } from 'react-router-dom'

export const CourseCard = (props) => {
  const { image, name, example, description, duration } = props
  return (

    <div className='border-1 border-cinza rounded-lg text-cinza'>
      <div>
        <img className='rounded-tl-lg rounded-tr-lg object-cover w-full' src={image} alt="imagem do curso" />
      </div>

      <div className='p-5'>
        <div className='mb-3'>
          <h3 className='font-semibold text-xl text-azul'>{name}</h3>
          <p className='text-cinza'>{example}</p>
        </div>

        <p className='text-gray-700'>{description}</p>
        <div className='flex items-center gap-1 my-3'>
          <BiTimeFive />
          <p>{duration}</p>
        </div>

        <div className='bg-azul p-1 rounded-md text-center text-white'>
          <Link to="/">Mais informaçoes</Link>
        </div>
      </div>

    </div>
  )
}
