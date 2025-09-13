import React from 'react'
import { HeroDiv } from '../../components/HeroDiv'
import { ExameCard } from '../../components/ExameCard'
import { concurse } from '../../const/Constants'

const concurseCopy = [...concurse]
export const Exame = () => {

    return (
        <>
            {/* hero section */}
            <section className='bg-black relative'>
                <div className='absolute w-full h-full bg-[url("images/fundo-exame.jpg")] bg-cover bg-top opacity-55'></div>
                <div className='max-w-7xl w-full mx-auto px-4 py-16 lg:px-8'>
                    <HeroDiv imagem={'images/destaque-exame.jpg'} percentage={"95%"} text={"Taxa de aprovação"} />
                </div>
            </section>

            <section>
                <div className='max-w-7xl w-full mx-auto px-4 py-16 lg:px-8'>
                    <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3'>
                        {concurseCopy.map(copy => (

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

                    <BoxModal
                        title={"Comece hoje a construir o seu futuro"}
                        text={"Não deixe para amanhã o que pode começar hoje."}
                        link1={"/contacto#start"}
                        link1Content={"Contacta-nos"}
                        link2={"/cursos/start"}
                        link2Content={"Ver cursos"}
                    />
                </div>
            </section>
        </>
    )
}
