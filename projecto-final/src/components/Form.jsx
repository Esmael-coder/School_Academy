import React, { useState, useEffect } from 'react'
import { TbMessageCircle } from "react-icons/tb";
import { courses } from '../const/Constants';
import { FiSend } from "react-icons/fi";

const courseCopy = [...courses]
export const Form = () => {

    const [nomeMessage, setNomeMessage] = useState()
    const validateName = (name) => {
        if (name.trim() == "") {

            setNomeMessage("preencha este campo.")
            return false

        } else if (!isNaN(name) || name.length < 2) {

            setNomeMessage("Introduza um nome válido.")
            return false

        } else {
            setNomeMessage("")
            return true
        }
    }

    const [emailMessage, setEmailMessage] = useState()
    const validateEmail = (email) => {

        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        if (email.trim() === "") {

            setEmailMessage("preencha este campo.")
            return false

        } else if (!regex.test(email)) {

            setEmailMessage("Introduza um email válido.")
            return false

        } else {
            setEmailMessage("")
            return true
        }
    }

    const [assuntoMessage, setAssuntolMessage] = useState()
    const validateAssunto = (assunto) => {

        if (assunto == "empty") {

            setAssuntolMessage("selecione um assunto")
            return false

        } else {

            return true
        }
    }

    const [phoneMessage, setPhoneMessage] = useState()
    const validatePhone = (phone) => {
        if (phone.trim() == "") {

            setPhoneMessage("preencha este campo.")
            return false

        } else if (!/^\d{9}$/.test(phone)) {

            setPhoneMessage("Introduza um número de telefone válido.")
            return false

        } else {
            setPhoneMessage("")
            return true
        }
    }

    const [message, setMessage] = useState()
    const validateMessage = (message) => {
        if (message.trim() == "") {

            setMessage("preencha este campo")
            return false

        } else if (message.length < 8 ) {
            setMessage("minimo 8 caracteres")

            return false

        } else {

            return true
        }

    }

    const handleSubmit = (event) => {
        event.preventDefault()

    }

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

                <form className='flex flex-col gap-4' onSubmit={(event) => handleSubmit(event)}>

                    {/* div para nome, tel, assunto, email */}
                    <div className='flex flex-col gap-4'>

                        {/* div para nome e email*/}
                        <div className='flex flex-col gap-4 md:grid md:grid-cols-2'>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="nome">Nome completo</label>
                                <input
                                    className='bg-sombra pl-2 p-1.5 rounded-lg'
                                    onBlur={(event) => validateName(event.target.value)}
                                    type="text" name='nome'
                                    id='nome'
                                    placeholder='Seu nome completo' />
                                <span className='text-red-500 pl-3'>{nomeMessage}</span>
                            </div>

                            <div className='flex flex-col gap-1'>
                                <label htmlFor="email"> Email</label>
                                <input
                                    className='bg-sombra pl-2 p-1.5 rounded-lg'
                                    onBlur={(event) => validateEmail(event.target.value)}
                                    type='email'
                                    name='email'
                                    id='email'
                                    placeholder='exemplo@gmail.com' />
                                <span className='text-red-500 pl-3'>{emailMessage}</span>
                            </div>
                        </div>

                        {/* div para tel e assunto */}
                        <div className='flex flex-col gap-4 md:grid md:grid-cols-2'>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="telefone">Telefone</label>
                                <input
                                    className='bg-sombra pl-2 p-1.5 rounded-lg'
                                    onBlur={(event) => validatePhone(event.target.value)}
                                    type="text"
                                    name='telefone'
                                    id='telefone'
                                    placeholder='+351 9xx xxx xxx' />
                                <span className='text-red-500 pl-3'>{phoneMessage}</span>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="assunto">Assunto</label>
                                <select
                                    className='bg-sombra pl-2 p-1.5 rounded-lg'
                                    onBlur={(event) => validateAssunto(event.target.value)}
                                    name="assunto"
                                    id="assunto">
                                    <option value="empty">Selecione o assunto</option>
                                    <option value="inscrição">Inscrição em curso</option>
                                    <option value="visita">Visita às instalações</option>
                                    <option value="inscrição">Outro assunto</option>
                                </select>
                                <span className='text-red-500 pl-3'>{assuntoMessage}</span>
                            </div>
                        </div>

                    </div>

                    {/* outros inputs */}
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="cursoInteresse">Curso de Interesse</label>
                        <select
                            className='bg-sombra pl-2 p-1.5 rounded-lg'
                            name="cursoInteresse"
                            id="cursoInteresse">
                            <option value="empty">Selecione o curso</option>
                            {
                                courseCopy.map(course => (
                                    <option key={course.id} value={course.name}>{course.name}</option>
                                ))
                            }
                        </select>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label htmlFor="mensagem">Mensagem</label>
                        <textarea 
                        className='bg-sombra pl-2 p-1.5 rounded-lg'
                        onBlur={(event)=>validateMessage(event.target.value)} 
                        name="mensagem" id="mensagem" 
                        rows={6} cols={30} 
                        placeholder='Escreva aqui a sua mensagem, dúvidas ou pedido de informações...'>    
                        </textarea>
                        <span className='text-red-500 pl-3'>{message}</span>
                    </div>

                    <button
                        className='bg-orange cursor-pointer hover:bg-hover text-white p-2 flex items-center justify-center gap-3 rounded-lg transition-color duration-300 ease-in-out'
                        type="submit">
                        <FiSend />
                        Enviar mensagem
                    </button>
                </form>

            </div>
        </div>
    )
}
