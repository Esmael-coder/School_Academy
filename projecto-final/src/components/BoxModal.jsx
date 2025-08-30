
import React from 'react'
import { Link } from 'react-router-dom'

export const BoxModal = ({title, text, link1, link2, link1Content, link2Content }) => {
  return (
    <div className='w-full min-h-54 flex flex-col gap-3 items-center justify-between p-8 rounded-2xl text-white bg-primary text-center'>
        <h1 className='font-semibold text-2xl'>{title}</h1>
        <p className='text-cinza'>{text}</p>
        <div className='w-full text-center flex flex-col md:flex-row md:justify-center gap-4'>
            <Link className='bg-orange rounded-md px-4 py-2'to={link1}>{link1Content}</Link>
            <Link className='bg-white text-primary rounded-md px-4 py-2'to={link2}>{link2Content}</Link>
        </div>
    </div>
  )
}
