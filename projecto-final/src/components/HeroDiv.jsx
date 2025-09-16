import React from 'react'

export const HeroDiv = (props) => {

    const {imagem, percentage, text}= props
  return (
    <div className='relative w-full min-w-[350px] rounded-xl shadow-lg md:w-[378px] lg:w-[592px] lg:h-auto'>
        <img className='object-cover w-full rounded-xl' src={imagem}/>

        <div className='absolute left-[70%] bottom-[-10%] -translate-x-1/2 text-center bg-white py-2 px-4 rounded-lg shadow-lg whitespace-nowrap'>
            <p className='text-gray-600'><span className='text-primary font-bold text-[27px] '>{percentage}</span><br/>{text}</p>
        </div>
    </div>
  )
}
