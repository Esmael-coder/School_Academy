import React from 'react'

export const HeroDiv = (props) => {

    const {imagem, percentage, text}= props
  return (
    <div className='relative w-full rounded-xl shadow-lg md:w-[378px] lg:w-[592px] lg:h-[400px]'>
        <img className='object-cover w-full rounded-xl md:h-[378px] lg:h-[400px]' src={imagem} alt="alunos estudando" />

        <div className='absolute left-[70%] bottom-[-10%] -translate-x-1/2 text-center bg-white py-2 px-4 rounded-lg shadow-lg whitespace-nowrap'>
            <p className='text-cinza'><span className='text-azul font-bold text-[27px] '>{percentage}</span><br/>{text}</p>
        </div>
    </div>
  )
}
