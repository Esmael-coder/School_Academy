
import React from 'react'
import { HashLink } from 'react-router-hash-link'

export const BoxModal = ({ title, text, link1, link2, link1Content, link2Content, funcao }) => {
  return (
    <div className='w-full min-h-54 flex flex-col gap-3 items-center justify-between p-8 rounded-2xl text-white bg-primary text-center'>
      <h1 className='font-semibold text-2xl'>{title}</h1>
      <p className='text-cinza'>{text}</p>

      <div className='w-full md:w-[400px] grid grid-cols-1 md:grid-cols-2 gap-4'>
        <HashLink
          onClick={funcao}
          to={link1}
          className='h-11 md:max-w-[200px] flex items-center justify-center bg-orange hover:bg-hover transition-all duration-300 ease-in-out rounded-md text-white'
        >
          {link1Content}
        </HashLink>

        <HashLink
          to={link2}
          className='h-11 md:max-w-[200px] flex items-center justify-center bg-white hover:bg-[#B3B3B3] text-primary rounded-md'
        >
          {link2Content}
        </HashLink>
      </div>
    </div>
  )
}

