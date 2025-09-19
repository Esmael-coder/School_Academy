import { div } from 'motion/react-client'
import React from 'react'

export const Profile = () => {
    return (
        <div className='flex flex-col px-4 py-8 rounded-md border border-gray-300'>
            <div className='flex flex-col items-center gap-2'>
                <div className='w-18 h-18 bg-secondary text-primary rounded-full flex items-center justify-center'>
                    MS
                </div>
                <div className='text-center mb-4'> 
                    <h2 className='text-2xl font-semibold'>Maria Silva</h2>
                    <p className='text-gray-600'>maria.silva@gmail.com</p>
                </div>
            </div>
            <button className='p-1 border border-gray-300 rounded-md'>
                Editar
            </button>
        </div>
    )
}
