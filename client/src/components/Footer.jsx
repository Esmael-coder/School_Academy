import React, { useState, useEffect } from 'react'
import { BiBrain, BiPhone } from 'react-icons/bi'
import { IoLocationOutline, } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { GoMail } from "react-icons/go";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FaYoutube, FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';


export const Footer = () => {
    const [year, setYear] = useState(0)

    useEffect(() => {
        const date = new Date()
        setYear(date.getFullYear())
    }, [])

    return (
        <footer className=' bg-primary'>

            <div className='max-w-7xl mx-auto px-4 py-10 sm:p-6 md:p-8 '>
                <div className='flex flex-col mb-8 gap-4'>
                    <div className='flex items-center gap-1 text-white'>
                        <BiBrain size={35} />
                        <h1 className='font-bold text-2xl'>MindUp</h1>
                    </div>
                    <motion.ul className='flex gap-3 text-white'
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{amount: 1}}
                    transition={{duration: 0.5}}
                    >
                        <li>
                            <a target='_blank' href="https://www.instagram.com/">{<FaInstagram size={20}/>}</a>
                        </li>
                        <li>
                            <a target='_blank' href="https://www.youtube.com/">{<FaYoutube size={20}/>}</a>
                        </li>
                        <li>
                            <a target='_blank' href="https://x.com/">{<FaXTwitter size={20}/>}</a>
                        </li>
                        <li>
                            <a target='_blank' href="https://github.com/">{<FaGithub size={20}/>}</a>
                        </li>
                    </motion.ul>
                    <div>

                    </div>
                </div>

                <div className='w-full text-white grid gap-6 md:grid-cols-3 text-[15px] mb-10'>

                    <div className='whitespace-nowrap'>
                        <h3 className='font-semibold mb-3'>Contacto</h3>
                        <ul className='flex flex-col gap-1 text-gray-600'>
                            <li className='flex items-center gap-2'>
                                <IoLocationOutline className='text-orange' size={18} />
                                Rua do alecrim, 75, Lisboa
                            </li>
                            <li>
                                <a className='flex items-center gap-2' href="tel:+351 21 573 496">
                                    <BiPhone className='text-orange' size={18} />
                                    <span className='hover:underline underline-offset-2'>+351 21 573 496</span>
                                </a>
                            </li>
                            <li>
                                <a className='flex items-center gap-2' href="mailto:info@mindup.pt">
                                    <GoMail className='text-orange' size={18} />
                                    <span className='hover:underline underline-offset-2'>info@mindup.pt</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className='whitespace-nowrap'>
                        <h3 className='font-semibold mb-3'>Horário de funcionamento</h3>
                        <ul className='text-gray-600 flex items-center gap-2'>
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
                        <ul className='text-gray-600'>
                            <li><Link className='hover:underline underline-offset-2' to={"politica-privacidade"}>Políticas de privacidade</Link></li>
                            <li><Link className='hover:underline underline-offset-2' to={"politica-cookie"}>Políticas de cookie</Link></li>
                            <li><Link className='hover:underline underline-offset-2' to={"aviso-legal"}>Aviso legal</Link></li>
                            <li><a className='hover:underline underline-offset-2' target='_blank' href='https://www.livroreclamacoes.pt/inicio/'>Livro de reclamação</a></li>
                        </ul>
                    </div>

                </div>
                <div className='w-full text-center border-t-1 border-gray-600 text-gray-600 py-4'>
                    <p>&copy; {year} MindUp. Todos os direitos reservados.</p>
                    <p>Desenvolvido por Esmael Monteiro.</p>
                </div>
            </div>
        </footer>
    )
}
