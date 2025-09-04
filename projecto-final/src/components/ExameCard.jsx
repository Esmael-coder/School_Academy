import React, { useState, useEffect } from 'react'
import { FaRegCheckCircle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { TbUsers } from "react-icons/tb";
import { LuCalendarDays } from "react-icons/lu";
import { GoChecklist } from "react-icons/go";
import { BsListCheck } from "react-icons/bs";
import { IoMdTime } from "react-icons/io";

import { Link } from 'react-router-dom';

export const ExameCard = ({ course, categoria, inicio, fim, exame, vagas, etapas, isOpen }) => {
    // igual para todos os cursos
    const requisitos = [
        "nacionalidade portuguesa",
        "Idade entre 18 a 30 anos",
        "12º ano de escolaridade"
    ]

    const [status, setStatus] = useState(null)
    const [style, setStyle] = useState({})

    const abertasStyle = {
        paddingLeft: "6px",
        paddingRight: "6px",
        alignSelf: "flex-end",
        border: "1px solid #16a34a",
        borderRadius: "50px",
        color: "#16a34a",

    }

    const brevimenteStyle = {
        paddingLeft: "6px",
        paddingRight: "6px",
        alignSelf: "flex-end",
        border: "1px solid #1112F1",
        borderRadius: "50px",
        color: "#1112F1",

    }

    useEffect(() => {

        if (isOpen) {
            setStatus("Abertas")
            setStyle(abertasStyle)

        } else {
            setStatus("Brevimente")
            setStyle(brevimenteStyle)
        }

    }, [isOpen])


    return (
        <div className='p-3 border border-cinza rounded-xl flex flex-col gap-4'>
            <div className='flex justify-between'>
                <div>
                    <h2 className='font-bold'>{course}</h2>
                    <span className='text-cinza'>{categoria}</span>
                </div>
                <div className='flex flex-col gap-1'>
                    <span className='font-semibold'>Candidaturas</span>
                    <span
                        style={style}>
                        {status}
                    </span>
                </div>
            </div>

            <div className='flex flex-col gap-4 text-cinza'>

                <div className='flex justify-between'>
                    <div>
                        <h3
                            className='text-primary flex items-center gap-1 mb-2 font-semibold'>
                            <IoMdTime />
                            Candidaturas
                        </h3>
                        <span>{inicio} - {fim}</span>
                    </div>
                    <div className='flex flex-col gap-1 items-end font-semibold'>
                        <span className='text-primary flex items-center gap-1'>
                            <TbUsers />
                            Vagas
                        </span>
                        <span>
                            {vagas}
                        </span>
                    </div>
                </div>

                <div>
                    <h3 className='text-primary flex gap-1 items-center mb-2 font-semibold'>
                        <LuCalendarDays />
                        Data do Exame
                    </h3>
                    <span>{exame}</span>
                </div>

                <div>
                    <h3
                        className='text-primary flex gap-1 items-center mb-2 font-semibold'>
                        <GoChecklist />
                        Requisitos
                    </h3>
                    {requisitos.map(req => (
                        <ul key={req} className='list-none'>
                            <li className='flex items-center gap-1 text-[15px]'>
                                <FaRegCheckCircle className='text-green-600' />
                                {req}
                            </li>
                        </ul>
                    ))}
                </div>
            </div>

            <div className='flex flex-col'>
                <h3
                    className='text-primary flex gap-1 items-center mb-2 font-semibold'>
                    <BsListCheck />
                    Fases do Concurso
                </h3>
                <ul className='flex flex-wrap text-[14px] gap-1'>
                    {etapas.map((etapa, index) => (

                        <li
                            key={index}
                            className='px-2 rounded-full bg-sombra'>
                            {etapa}
                        </li>

                    ))}
                </ul>
            </div>


            <Link className='bg-orange hover:bg-Sombra rounded-lg text-white flex p-2 items-center justify-center gap-3'>
                Informações detalhadas
                <FaArrowRightLong />
            </Link>

        </div>
    )
}
