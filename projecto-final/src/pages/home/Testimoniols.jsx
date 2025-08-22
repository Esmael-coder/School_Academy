import React from 'react'
import { BiSolidQuoteLeft } from "react-icons/bi";

export const Testimoniols = ({ name, course, testimony }) => {
    return (
        <article className='w-[300px] h-[300px] p-4 bg-white rounded-xl shadow-md relative overflow-y-auto'>
            <div className='absolute right-6 top-4 text-orange bg-ice p-2 rounded-full'>
                <BiSolidQuoteLeft size={24} />
            </div>
            <div className='mb-4'>
                <p className='font-semibold'>{name}</p>
                <p className='text-cinza'>{course}</p>
            </div>

            <p className='italic'>{testimony}</p>
        </article>
    )
}
