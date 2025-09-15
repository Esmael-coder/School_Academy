import React from 'react'

export const Box = ({ icon, title, text }) => {
    return (
        <div className='flex flex-col gap-2 shadow-[var(--boxShadow2)] p-5 rounded-lg items-center text-center'>
            <div className='p-4 rounded-full bg-secondary text-primary'>
                {icon}
            </div>
            <h3>{title}</h3>
            <p className='text-gray-600'>{text}</p>
        </div>
    )
}
