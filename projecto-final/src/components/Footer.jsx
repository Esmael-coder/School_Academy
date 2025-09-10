import React, { useState, useEffect } from 'react'
import { BiBrain, BiPhone } from 'react-icons/bi'
import { IoLocationOutline, } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { GoMail } from "react-icons/go";
import { Link } from 'react-router-dom';


export const Footer = () => {
    const [year, setYear] = useState(0)

    useEffect(() => {
        const date = new Date()
        setYear(date.getFullYear())
    }, [])

    return (
        <footer className=' bg-primary'>

            <div className='max-w-7xl mx-auto px-4 py-10 sm:p-6 md:p-8 '>

                <div className='flex items-center gap-1 text-white mb-10'>
                    <BiBrain size={35} />
                    <h1 className='font-bold text-2xl'>MindUp</h1>
                </div>

                <div className='w-full text-white grid gap-6 md:grid-cols-3 text-[15px] mb-10'>

                    <div className='whitespace-nowrap'>
                        <h3 className='font-semibold mb-3'>Contacto</h3>
                        <ul className='flex flex-col gap-1 text-cinza'>
                            <li className='flex items-center gap-2'>
                                <IoLocationOutline className='text-orange' size={18} />
                                Rua do alecrim, 75, Lisboa
                            </li>
                            <li className='flex items-center gap-2'>
                                <BiPhone className='text-orange' size={18} />
                                +351 21 573 496
                            </li>
                            <li className='flex items-center gap-2'>
                                <GoMail className='text-orange' size={18} />
                                info@mindup.pt
                            </li>
                        </ul>
                    </div>

                    <div className='whitespace-nowrap'>
                        <h3 className='font-semibold mb-3'>Horário de funcionamento</h3>
                        <ul className='text-cinza flex items-center gap-2'>
                            <IoMdTime className='text-orange' size={18} />
                            <div>
                                <li>Segunda a sexta: 9h - 20h</li>
                                <li>Sábado: 9h - 17h</li>
                                <li>Domingo: Encerrado</li>
                            </div>
                        </ul>
                    </div>

                    <div className='whitespace-nowrap'>
                        <h3 className='font-semibold mb-3'>Links Úteis</h3>
                        <ul className='text-cinza'>
                            <li><Link className='hover:underline' to={"politica-privacidade"}>Políticas de privacidade</Link></li>
                            <li><Link>Informações de cookies</Link></li>
                            <li><Link>Livro de reclamação</Link></li>
                        </ul>
                    </div>

                </div>
                <div className='w-full text-center border-t-1 border-cinza text-cinza py-4'>
                    <p>&copy; {year} MindUp. Todos os direitos reservados.</p>
                    <p>Desenvolvido por Esmael Monteiro.</p>
                </div>
            </div>
        </footer>
    )
}
