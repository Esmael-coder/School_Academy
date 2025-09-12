
import React from 'react'
import { Link } from 'react-router-dom'

export const BoxModal = ({title, text, link1, link2, link1Content, link2Content }) => {
  return (
    <div className='w-full min-h-54 flex flex-col gap-3 items-center justify-between p-8 rounded-2xl text-white bg-primary text-center'>
        <h1 className='font-semibold text-2xl'>{title}</h1>
        <p className='text-cinza'>{text}</p>
        <div className='w-full md:w-[400px] grid grid-cols-1 md:grid-cols-2 gap-4'>
            <Link className='h-11 md:max-w-[200px] flex items-center justify-center bg-orange hover:bg-hover transition-all duration-300 ease-in-out rounded-md 'to={link1}>{link1Content}</Link>
            <Link className='h-11 md:max-w-[200px] flex items-center justify-center bg-white hover:bg-[#B3B3B3] text-primary rounded-md'to={link2}>{link2Content}</Link>
        </div>
    </div>
  )
}
