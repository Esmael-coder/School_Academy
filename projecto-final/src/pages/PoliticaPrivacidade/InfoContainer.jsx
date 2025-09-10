import React from 'react'

export const InfoContainer = ({ icon, title, children }) => {
    return (
        <article className='max-w-7xl bg-white rounded-lg p-4 md:p-8 shadow-[var(--boxShadow2)]'>
            <div className='flex items-center gap-3 mb-8'>
                <div className='p-2 rounded-md text-hightlight bg-secondary'>
                    {icon}
                </div>
                <h2 className='text-primary text-xl font-semibold'>{title}</h2>
            </div>
            {children}
        </article>
    )
}
