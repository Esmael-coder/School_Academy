
import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';

// recebendo icon como props. tenho que armazenanar numa variável com letra maiúscula para poder usar 
export const Container = ({ content, icon}) => {

  const Icon = icon


  return (
    <Link to={"/cursos"} className='bg-white p-4 shadow-sm hover:shadow-lg cursor-pointer rounded-lg flex items-center gap-2 relative transition-all duration-300 ease-in'>
      
        <p className='flex items-center gap-2'>
          <Icon className="text-orange" size={20} />
          {content}
        </p>

        <IoIosArrowForward className='absolute text-orange right-4 top-4.5' size={20} />
    </Link>
  )
}
