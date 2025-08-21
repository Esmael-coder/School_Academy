
import React from 'react'
import { BiRightArrowAlt  } from "react-icons/bi";

// recebendo icon como props. tenho que armazenanar numa variável com letra maiúscula para poder usar 
export const Container = ({ content, icon }) => {
  const Icon = icon
  return (
    <div className='bg-white p-3 shadow-sm hover:shadow-lg cursor-pointer rounded-lg flex items-center gap-2 relative transition-all duration-300 ease-in'>
      <div className='p-2  bg-ice rounded-full'>
        <Icon className="text-orange" size={20} />
      </div>
      <p>{content}</p>
      <BiRightArrowAlt  className='absolute text-orange right-4 top-4.5' size={24}/>
    </div>
  )
}
