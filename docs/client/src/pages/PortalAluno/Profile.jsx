import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'

export const Profile = ({data}) => {

    const navigate = useNavigate()
    /* remove o token do local starage e redireciona para pagina login */
    const logOut = () =>{
        localStorage.removeItem('token')
        navigate('/login')
    
    }

    const logo = data.name ? data?.name.slice(0, 1) : ''

    return (
        <div className='flex flex-col px-4 py-8 rounded-md border border-gray-300'>
            <div className='flex flex-col items-center gap-2'>
                <div className='w-18 h-18 bg-secondary border border-realce text-primary text-4xl font-bold rounded-full flex items-center justify-center'>
                    {logo}
                </div>
                <div className='text-center mb-4'> 
                    <h2 className='text-2xl font-semibold'>{data.name}</h2>
                    <p className='text-gray-600'>{data.email}</p>
                </div>
            </div>
            <button onClick={logOut} className='p-1 bg-hightlight text-white hover:bg-primary border border-gray-300 rounded-md cursor-pointer'>
                terminar sessão
            </button>
        </div>
    )
}
