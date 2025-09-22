import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineKeyboardBackspace } from "react-icons/md";

export const Page404 = () => {
    return (
        <section>
            <div className='w-full h-[calc(100vh-64px)] max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-center'>
                <div className='flex items-center flex-col text-center'>
                    <h1 className='font-extrabold text-primary text-8xl md:text-9xl mb-2'>404</h1>
                    <h2 className='text-orange text-2xl mb-2'>Página não encontrada!</h2>
                    <p className='mb-4 text-gray-600 text-xl'>Ops! Parece que você se perdeu nos seus estudos. A página que procura não existe ou foi movida.</p>
                    <Link to={"/"} className='bg-orange hover:bg-hover py-2 px-3 rounded text-white flex items-center gap-2 justify-center'>
                        <MdOutlineKeyboardBackspace />
                        Voltar ao Inicio
                    </Link>
                </div>
            </div>
        </section>
    )
}
