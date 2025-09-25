
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const Login = () => {

    const [message, setMessage] = useState(null)
    const navigate = useNavigate()

    const finUser = async (formData) => {

        try {

            const response = await fetch("https://school-academy.onrender.com/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),

            });

            if (!response.ok) {

                const res = await response.json()

                setMessage(res.message)
            }

            const res = await response.json()
            sessionStorage.setItem('token', res)
            navigate("/portal-aluno")
            return

        } catch (error) {



        }

    }


    const handleSubmit = (event) => {
        event.preventDefault()

        const formData = {
            email: event.target.email.value,
            password: event.target.password.value
        }

        finUser(formData)

    }



    return (
        <section>
            <div className='w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8'>

                <div className='max-w-[400px] p-4 md:shadow-[var(--boxShadow2)] mx-auto mt-40 rounded-md'>
                    <h1 className='text-center text-primary font-bold text-2xl mb-5'>Login</h1>
                    <form className='flex flex-col gap-5' onSubmit={(event) => handleSubmit(event)}>

                        <div className='flex flex-col gap-1'>
                            <label htmlFor="email">Email</label>
                            <input className='bg-sombra p-2 rounded-md outline-realce'
                                type="email"
                                name='email'
                                id='email'
                                placeholder='seu email' />
                        </div>

                        <div className='flex flex-col gap-1'>
                            <label htmlFor="password">Palavra-passe</label>
                            <input
                                className='bg-sombra p-2 rounded-md outline-realce'
                                type="password"
                                name='password'
                                id='password'
                                placeholder='palavra-passe' />
                        </div>

                        {message && <p className='mx-auto text-center bg-red-100 border border-red-400 text-red-500 p-4 rounded-md w-80'>{message}</p>}
                        <button
                            type='submit'
                            className='bg-primary text-white p-2 rounded-md mt-4 cursor-pointer hover:bg-hightlight'>Entrar</button>
                    </form>
                    <div className='text-gray-600 mt-4'>
                        <p>Não tem uma conta? <Link className='text-primary underline underline-offset-2' to={'/cadastro'}>Criar conta</Link></p>
                    </div>
                </div>
            </div>
        </section>
    )
}
