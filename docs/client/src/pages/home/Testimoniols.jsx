import React from 'react'
import { BiSolidQuoteLeft } from "react-icons/bi";

export const Testimoniols = ({ name, course, testimony }) => {
    return (
        <article className='relative bg-white rounded-2xl p-6 mt-6 shadow-xl max-w-xs text-center'>
            <div className='absolute right-6 top-4 text-orange bg-ice p-2 rounded-full shadow-md'>
                <BiSolidQuoteLeft size={24} />
            </div>
            <div className='mb-4'>
                <p className='font-semibold'>{name}</p>
                <p className='text-gray-600'>{course}</p>
            </div>

            <p className='italic'>{testimony}</p>
        </article>
    )
}
