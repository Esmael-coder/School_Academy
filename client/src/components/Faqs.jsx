import React from 'react'
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { faqs } from '../const/Constants'
import { useState } from "react";


export const Faqs = () => {

    const [idArray, setIdArray] = useState([])

    const handleClick = (newId) => {

        if (idArray.includes(newId)) {

            setIdArray(idArray.filter(id => id !== newId))

        } else {

            setIdArray([...idArray, newId])
        }
    }

    return (

        <div>
            <ul>
                {faqs.map(faq => (
                    <li key={faq.id} className='mb-8 pb-4 border-b border-gray-600 cursor-pointer transition duration-300 ease-in-out' onClick={() => handleClick(faq.id)}>
                        <h2 className='flex items-center justify-between text-primary text-lg mb-3'>
                            {faq.question}
                            {idArray.includes(faq.id) ? <FaChevronUp className='text-orange' /> : <FaChevronDown className='text-orange' />}
                        </h2>
                        <div className={idArray.includes(faq.id) ? "block" : "hidden"}>
                            <p className='text-gray-600'>{faq.answer}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
