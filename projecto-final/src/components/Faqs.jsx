import React from 'react'
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { faqs } from '../const/Constants'
import { useState } from "react";


export const Faqs = () => {

    const [isOpen , setIsOpen] = useState(false)
    const handleClick = ()=>{
        setIsOpen(!isOpen)
    }
    return (
        <div>
            <ul>
                {faqs.map(faq => (
                    <li key={faq.id} className='mb-8 pb-4 border-b border-orange cursor-pointer transition duration-300 ease-in-out' onClick={handleClick}>
                        <h2 className='flex items-center justify-between text-primary text-lg mb-3'>
                            {faq.question}
                            {isOpen ? <FaChevronUp className='text-orange'/> : <FaChevronDown className='text-orange'/> }
                        </h2>
                        <div className={isOpen ? "block" : "hidden"}>
                            <p>{faq.answer}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
