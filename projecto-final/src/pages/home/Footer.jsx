import React from 'react'

export const Footer = () => {
    return (
        <div className='h-44 bg-azul'>
            <div className='max-w-7xl h-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center'>
                <ul className='list-none w-[60%] text-cinza flex-col space-y-5'>
                    <li>
                        <div className='flex items-center justify-between'>
                            <span className='font-bold text-3xl text-white'>10K+</span>
                            <p>Alunos aprovados</p>
                        </div> 
                    </li>
                    <li>
                        <div className='flex items-center justify-between'>
                            <span className='font-bold text-3xl text-white'>95%</span>
                            <p>Alunos aprovados</p>
                        </div> 
                    </li>
                    <li>
                        <div className='flex items-center justify-between'>
                            <span className='font-bold text-3xl text-white'>15+</span>
                            <p className='text-xl'>Alunos aprovados</p>
                        </div> 
                    </li>

                </ul>
            </div>
        </div>
    )
}
