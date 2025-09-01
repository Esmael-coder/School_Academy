import React from 'react'
import Imagem1 from '../../assets/imagem1.jpg'
import { HeroDiv } from '../../components/HeroDiv'
import { ExameCard } from '../../components/ExameCard'
import { useState } from 'react'
import { concurse } from '../../const/Constants'

const concurseCopy = [...concurse]
export const Exame = () => {

    return (
        <>
            {/* hero section */}
            <section className='bg-secondary'>
                <div className='max-w-7xl w-full mx-auto px-4 py-16 lg:px-8'>
                    <HeroDiv imagem={Imagem1} percentage={"50%"} text={"Taxa de sucesso"} className='bg-secondary' />
                </div>
            </section>

            <section>
                <div className='max-w-7xl w-full mx-auto px-4 py-16 lg:px-8'>
                    <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3'>
                        {concurseCopy.map(copy =>(

                        <ExameCard 
                        key={copy.id}
                        course={copy.course}
                        categoria={copy.category} 
                        inicio={copy.start}
                        fim={copy.end}
                        exame={copy.exame}
                        vagas={copy.avaliableSpace}
                        etapas={copy.etap}
                        isOpen={copy.isOpen}
                        >

                        </ExameCard>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
