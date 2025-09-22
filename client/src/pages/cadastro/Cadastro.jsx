
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { AiOutlineExclamationCircle } from 'react-icons/ai'


export const Cadastro = () => {

    const [errorMessage, setErrorMessage] = useState(null)
    const navigate = useNavigate(null)


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


    const [passworMessage, setPasswordMessage] = useState(null)
    const [userPassword, setUserPassword] = useState(null)

    const validatePassword = (password) => {

        const regex = /^(?! )[ -~]{6,12}(?<! )$/

        if (password === "") {

            setPasswordMessage("preencha este campo.")
            return false

        } else if (!regex.test(password)) {

            setPasswordMessage("sem espaço no inicio e fim. min 6 e max 12 caracteres")
            return false


        } else {
            setUserPassword(password)
            setPasswordMessage(null)
            return true
        }
    }


    const [passworConfirmMessage, setPasswordConfirmMessage] = useState(null)

    const validatePasswordConfirm = (passwordConfirmation) => {

        if (passwordConfirmation.trim() === "") {

            setPasswordConfirmMessage("preencha este campo.")
            return false

        } else if (passwordConfirmation !== userPassword) {

            setPasswordConfirmMessage("Introduza a mesma palavra-passe.")
            return false


        } else {

            setPasswordConfirmMessage(null)
            return true
        }
    }

    const checkAllValidations = (data) => {

        if (validateName(data.nome) &&
            validateEmail(data.email) &&
            validatePassword(data.password) &&
            validatePasswordConfirm(data.passwordConfirmation)) {
            return true
        }

        return false
    }

    const createUser = async (data) => {

        try {

            const response = await fetch("http://localhost:3000/cadastro", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),

            })

            const res = await response.json()

            if (!response.ok) {
                
                setErrorMessage(res.message)
                return
            }

            navigate('/login')

            

        } catch (error) {

        }

    }
    const handleSubmit = (event) => {
        event.preventDefault();

        const values = {
            nome: event.target.nome.value,
            email: event.target.email.value,
            password: event.target.password.value,
            passwordConfirmation: event.target.passwordConfirmation.value,
        }

        if (checkAllValidations(values)) {

            const dataForm = {
                nome: event.target.nome.value,
                email: event.target.email.value,
                password: event.target.password.value

            }

            createUser(dataForm)

        }
    }


    return (
        <section>
            <div className='w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8'>

                <div className='max-w-[400px] p-4 md:shadow-[var(--boxShadow2)] mx-auto mt-40 rounded-md'>
                    <h1 className='text-center text-primary font-bold text-2xl mb-5'>Criar conta</h1>
                    <form className='flex flex-col gap-5' onSubmit={(event) => handleSubmit(event)}>

                        <div className='flex flex-col gap-1'>
                            <label htmlFor="nome">Nome</label>
                            <input className='bg-sombra p-2 rounded-md outline-realce'
                                type="text"
                                name='nome'
                                id='nome'
                                placeholder='primeiro nome'
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
                                placeholder='exemplo@gmail.com'
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
                                onBlur={(event) => validatePasswordConfirm(event.target.value)}

                            />

                            <span className='text-red-500 text-sm pl-3 flex items-center gap-2'>
                                {passworConfirmMessage !== null && <AiOutlineExclamationCircle />}
                                {passworConfirmMessage}
                            </span>
                        </div>

                        <button
                            type='submit'
                            className='bg-primary text-white p-2 rounded-md mt-4 cursor-pointer hover:bg-hightlight'>Criar conta</button>
                    </form>
                    {errorMessage && <p className='mx-auto text-center mt-4 bg-red-100 border border-red-400 text-red-500 p-4 rounded-md w-80'>{errorMessage}</p>}
                    <div className='text-gray-600 mt-4'>
                        <p>Tem uma conta? <Link className='text-primary underline underline-offset-2' to={'/login'}>Login</Link></p>
                    </div>
                </div>
            </div>
        </section>
    )
}
