import React from 'react'

export const Method = ({ img, title, text }) => {
    return (
        <div className='flex '>
            <img src={img} alt={title} />
            <div className='text-center'>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        </div>
    )
}
