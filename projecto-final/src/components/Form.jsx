import React, { useEffect } from 'react'
import { TbMessageCircle } from "react-icons/tb";
import { courses } from '../const/Constants';

const courseCopy = [...courses]
export const Form = () => {

    return (
        <div>
            <div className='p-4 border-1 border-cinza rounded-2xl'>
                <div className='flex items-center text-primary gap-1 mb-2'>
                    <TbMessageCircle size={24} />
                    <h3>Envie-nos uma mensagem</h3>
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
                                <input className='bg-ice pl-2 p-1.5 rounded-lg' type="text" name='nome' id='nome' placeholder='Seu nome completo' />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="email"> Email</label>
                                <input className='bg-ice pl-2 p-1.5 rounded-lg' type='email' name='email' id='email' placeholder='exemplo@gmail.com' />
                            </div>
                        </div>

                        {/* div para tel e assunto */}
                        <div className='flex flex-col gap-4 md:grid md:grid-cols-2'>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="telefone">Telefone</label>
                                <input className='bg-ice pl-2 p-1.5 rounded-lg' type="text" name='telefone' id='telefone'/>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="assunto">Assunto</label>
                                <select className='bg-ice pl-2 p-1.5 rounded-lg' name="assunto" id="assunto">
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
                        <select className='bg-ice pl-2 p-1.5 rounded-lg' name="cursoInteresse" id="cursoInteresse">
                            {
                                courseCopy.map(course => (
                                    <option key={course.id} value={course.name}>{course.name}</option>
                                ))
                            }
                        </select>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label htmlFor="mensagem">Mensagem</label>
                        <textarea className='bg-ice pl-2 p-1.5 rounded-lg' name="mensagem" id="mensagem" placeholder='Escreva aqui a sua mensagem, dúvidas ou pedido de informações...'></textarea>
                    </div>

                    <input className='bg-primary text-white p-2 rounded-lg' type="submit" value="Enviar mensagem" />
                </form>

            </div>
        </div>
    )
}
