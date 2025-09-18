import React from 'react'

export const Login = () => {

    const handleSubmit = (event) => {
        event.preventDefault()

        const formData = {
            email: event.target.email.value,
            password: event.target.password.value
        }

        const finUser = async (data) => {

            const response = await fetch("http://localhost:3000/login", {
                method: "GET",
                body: JSON.stringify(data),
            
            })
        }
    }



        return (
            <section>
                <div className='w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8'>

                    <div className='max-w-[400px] p-4 shadow-[var(--boxShadow2)] mx-auto mt-40 rounded-md'>
                        <h1 className='text-center text-primary font-bold text-2xl mb-5'>Login</h1>
                        <form className='flex flex-col gap-5' onSubmit={(event) => handleSubmit(event)}>

                            <div className='flex flex-col gap-1'>
                                <label htmlFor="email">Email</label>
                                <input className='bg-sombra p-2 rounded-md outline-realce'
                                    type="email"
                                    name='email'
                                    id='email'
                                    placeholder='seu email'/>
                            </div>

                            <div className='flex flex-col gap-1'>
                                <label htmlFor="password">Palavra-passe</label>
                                <input
                                    className='bg-sombra p-2 rounded-md outline-realce'
                                    type="password"
                                    name='password'
                                    id='password'
                                    placeholder='palavra-passe'/>
                            </div>

                            <button
                                type='submit'
                                className='bg-primary text-white p-2 rounded-md mt-4 cursor-pointer hover:bg-hightlight'>Entrar</button>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
