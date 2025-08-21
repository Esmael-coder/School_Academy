import React from 'react'
import { BiTrophy } from "react-icons/bi";
import { IoIosStats } from "react-icons/io";
import { GrCatalog } from "react-icons/gr";


export const Footer = () => {
    return (
        <footer className='bg-azul'>
            <div className='max-w-7xl mx-auto h-[400px] px-4 sm:px-6 lg:px-8 flex items-center'>
                <ul className='list-none w-full h-full text-white flex flex-col justify-evenly'>
                    <li>
                        <div className='flex gap-5 items-center'>
                            <BiTrophy size={70} />
                            <p>
                                <span className='font-bold !text-3xl'>
                                    10K+
                                </span> <br />
                                Alunos aprovados
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className='flex gap-5 items-center'>
                            <IoIosStats size={70} />
                            <p>
                                <span className='font-bold !text-3xl'>
                                    95%
                                </span> <br />
                                Taxa de sucesso
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className='flex gap-5 items-center'>
                            <GrCatalog size={70} />
                            <p>
                                <span className='font-bold !text-3xl'>
                                    15+
                                </span> <br />
                                Cursos disponìveis
                            </p>
                        </div>
                    </li>

                </ul>
            </div>
        </footer>
    )
}
