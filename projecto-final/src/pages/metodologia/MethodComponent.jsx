import React from 'react'

export const MethodComponent = ({ img, title, text }) => {
    return (
        <div className='flex flex-col items-center p-4 justify-between'>
            <img className='w-[257px] h-[257px]' src={img} alt={title} />
            <div className='text-center text-cinza '>
                <h3 className='text-primary font-semibold text-xl mb-5'>{title}</h3>
                <p>{text}</p>
            </div>
        </div>
    )
}
