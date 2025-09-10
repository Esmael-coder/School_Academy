import React from 'react'

export const InfoContainer = ({ icon, title, children }) => {
    return (
        <article className='max-w-7xl bg-white rounded-lg p-4 shadow-[var(--boxShadow2)]'>
            <div className='flex items-center'>
                <div className='p-5 rounded-md mb-8'>
                    {icon}
                </div>
                <h2 className='text-primary text-xl font-semibold'>{title}</h2>
            </div>
            {children}
        </article>
    )
}
