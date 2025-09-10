import React from 'react'
import { InfoContainer } from './InfoContainer'

export const PoliticaPrivacidade = () => {
    return (
        <>

            <section className='bg-secondary h-80'>
                <div className='max-w-7xl w-full h-full mx-auto px-4 md:px-6 lg:px-8 flex flex-col items-center justify-center gap-3'>
                    <h1 className='font-bold text-2xl lg:text-4xl'>Política de Privacidade</h1>
                    <p className='text-cinza'>A sua privacidade é a nossa prioridade. Saiba como protegemos e respeitamos os seus dados pessoais.</p>
                </div>
            </section>

            <section>
                <InfoContainer title={"Recolha de dados"}>

                </InfoContainer>
            </section>
        </>
    )
}
