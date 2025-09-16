import React, { useState } from 'react'
import { AiOutlineExclamationCircle } from 'react-icons/ai'


export const Cadastro = () => {


    const [nomeMessage, setNomeMessage] = useState(null)
    const validateName = (name) => {
        if (name.trim() == "") {

            setNomeMessage("preencha este campo.")
            return false

        } else if (!isNaN(name) || name.length < 2) {

            setNomeMessage("Introduza um nome válido.")
            return false

        } else {
            setNomeMessage(null)
            return true
        }
    }

    const [emailMessage, setEmailMessage] = useState(null)
    const validateEmail = (email) => {

        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        if (email.trim() === "") {

            setEmailMessage("preencha este campo.")
            return false

        } else if (!regex.test(email)) {

            setEmailMessage("Introduza um email válido.")
            return false

        } else {
            setEmailMessage(null)
            return true
        }
    }


    const [passworMessage, setpasswordMessage] = useState(null)
    let userPassword

    const validatePassword = (password) => {

        const regex = /^(?! )[ -~]{6,12}(?<! )$/
        if (!regex.test(password)) {

            setpasswordMessage("Não pode conter espaço no inicio e no fim. mínimo 6 caracter e máximo 12.")
            return false


        } else {
            userPassword = password
            setpasswordMessage(null)
            return true
        }
    }


    const [passworConfirmMessage, setpasswordConfirmMessage] = useState(null)

    const validatePasswordConfirm = (passwordConfirmation) => {

        if (passworConfirmMessage !== password) {

            setpasswordConfirmMessage("Introduza a mesma palavra passe")
            return false


        } else {

            setpasswordConfirmMessage(null)
            return true
        }
    }


    const handleSubmit = (event) => {
        event.preventDefault()

    }




    return (
        <div className='w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8'>

            <div className='max-w-[400px] p-4 shadow-[var(--boxShadow2)] mx-auto mt-40 rounded-md'>
                <h1 className='text-center text-primary font-bold text-2xl mb-5'>Criar conta</h1>
                <form className='flex flex-col gap-5'>

                    <div className='flex flex-col gap-1'>
                        <label htmlFor="nome">Nome</label>
                        <input className='bg-sombra p-2 rounded-md outline-realce'
                            type="text"
                            name='nome'
                            id='nome'
                            placeholder='nome de utilizador'
                            onBlur={(event) => validateName(event.target.value)} />

                        <span className='text-red-500 text-sm pl-3 flex items-center gap-2'>
                            {nomeMessage !== null && <AiOutlineExclamationCircle />}
                            {nomeMessage}
                        </span>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label htmlFor="email">Email</label>
                        <input className='bg-sombra p-2 rounded-md outline-realce'
                            type="email"
                            name='email'
                            id='email'
                            placeholder='seu email'
                            onBlur={(event) => validateEmail(event.target.value)}

                        />

                        <span className='text-red-500 text-sm pl-3 flex items-center gap-2'>
                            {emailMessage !== null && <AiOutlineExclamationCircle />}
                            {emailMessage}
                        </span>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label htmlFor="password">Palavra-passe</label>
                        <input
                            className='bg-sombra p-2 rounded-md outline-realce'
                            type="password"
                            name='password'
                            id='password'
                            placeholder='palavra-passe'
                            onBlur={(event) => validatePassword(event.target.value)}

                        />
                        <span className='text-red-500 text-sm pl-3 flex items-center gap-2'>
                            {passworMessage !== null && <AiOutlineExclamationCircle />}
                            {passworMessage}
                        </span>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label htmlFor="passwordConfirmation">Confirmar palavra-passe</label>
                        <input
                            className='bg-sombra p-2 rounded-md outline-realce'
                            type="password"
                            name='passwordConfirmation'
                            id='passwordConfirmation'
                            placeholder='palavra-passe novamente' 
                            onBlur={(event)=>validatePasswordConfirm(event.target.value)}

                            />

                        <span className='text-red-500 text-sm pl-3 flex items-center gap-2'>
                            {passworConfirmMessage !== null && <AiOutlineExclamationCircle />}
                            {passworConfirmMessage}
                        </span>
                    </div>

                    <button
                        type='submit'
                        className='bg-primary text-white p-2 rounded-md mt-4'>Criar conta</button>
                </form>
            </div>
        </div>
    )
}
