import React, { useEffect } from 'react'
import { TbMessageCircle } from "react-icons/tb";
import { courses } from '../const/Constants';
import { FiSend } from "react-icons/fi";

const courseCopy = [...courses]
export const Form = () => {

    return (
        <div>
            <div className='p-6 rounded-2xl'>
                <div className='flex items-center text-primary gap-1 mb-2'>
                    <TbMessageCircle className='text-orange' size={24} />
                    <h3 className='text-lg'>Envie-nos uma mensagem</h3>
                </div>
                <p className='text-cinza mb-3'>
                    Preencha o formulário abaixo e responderemos o mais rapidamente possível.
                </p>

                <form className='flex flex-col gap-4'>

                    {/* div para nome, tel, assunto, email */}
                    <div className='flex flex-col gap-4'>

                        {/* div para nome e email*/}
                        <div className='flex flex-col gap-4 md:grid md:grid-cols-2'>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="nome">Nome completo</label>
                                <input className='bg-sombra pl-2 p-1.5 rounded-lg' type="text" name='nome' id='nome' placeholder='Seu nome completo' />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="email"> Email</label>
                                <input className='bg-sombra pl-2 p-1.5 rounded-lg' type='email' name='email' id='email' placeholder='exemplo@gmail.com' />
                            </div>
                        </div>

                        {/* div para tel e assunto */}
                        <div className='flex flex-col gap-4 md:grid md:grid-cols-2'>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="telefone">Telefone</label>
                                <input className='bg-sombra pl-2 p-1.5 rounded-lg' type="text" name='telefone' id='telefone' placeholder='+351 9xx xxx xxx'/>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="assunto">Assunto</label>
                                <select className='bg-sombra pl-2 p-1.5 rounded-lg' name="assunto" id="assunto">
                                    <option value="inscrição">Inscrição em curso</option>
                                    <option value="visita">Visita às instalações</option>
                                    <option value="inscrição">Outro assunto</option>
                                </select>
                            </div>
                        </div>

                    </div>

                    {/* outros inputs */}
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="cursoInteresse">Curso de Interesse</label>
                        <select className='bg-sombra pl-2 p-1.5 rounded-lg' name="cursoInteresse" id="cursoInteresse">
                            {
                                courseCopy.map(course => (
                                    <option key={course.id} value={course.name}>{course.name}</option>
                                ))
                            }
                        </select>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label htmlFor="mensagem">Mensagem</label>
                        <textarea className='bg-sombra pl-2 p-1.5 rounded-lg' name="mensagem" id="mensagem" rows={6} cols={30} placeholder='Escreva aqui a sua mensagem, dúvidas ou pedido de informações...'></textarea>
                    </div>

                    <button 
                    className='bg-orange cursor-pointer hover:bg-hover text-white p-2 flex items-center justify-center gap-3 rounded-lg transition-color duration-300 ease-in-out' 
                    type="submit">
                    <FiSend/> 
                    Enviar mensagem
                    </button>
                </form>

            </div>
        </div>
    )
}
