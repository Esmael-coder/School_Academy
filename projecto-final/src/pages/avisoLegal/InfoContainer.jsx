import React from 'react'

export const InfoContainer = ({ icon, title, text, children }) => {
  return (
    <article className='max-w-7xl bg-white rounded-lg p-4 md:p-8 shadow-[var(--boxShadow2)] flex flex-col gap-4'>
      <div className='flex items-center gap-3'>
        <div className='p-2 rounded-md text-hightlight bg-secondary'>
          {icon}
        </div>
        <h2 className='text-primary font-bold text-xl'>
          {title}
        </h2>
      </div>
      <p className='text-gray-600'>{text}</p>
      {children}
    </article>
  )
}
