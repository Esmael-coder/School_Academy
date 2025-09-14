import React from 'react'
import { HeroDiv } from '../../components/HeroDiv'
import { ExameCard } from '../../components/ExameCard'
import { concurse } from '../../const/Constants'
import { BoxModal } from '../../components/BoxModal'
import { Faqs } from '../../components/Faqs.jsx'
import { motion } from 'motion/react'
const concurseCopy = [...concurse]
export const Exame = ({ handleFilter }) => {

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
                    <motion.h1
                        className='mt-10 mb-3 text-primary font-bold text-3xl lg:text-4xl text-center'
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ amount: 1, once: true }}>
                        Exames marcados
                    </motion.h1>
                    <p className='text-cinza text-center'>95% taxa de aprovação com a nossa preparação</p>

                    <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3 my-20'>
                        {concurseCopy.map(copy => (

                            <motion.div
                                key={copy.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: copy.id * 0.2 }}
                                viewport={{ amount: 0.3, once: true }}>
                                <ExameCard
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
                            </motion.div>
                        ))}
                    </div>

                    <div className='my-30'>
                        <motion.h1
                            className='text-primary font-bold text-3xl lg:text-4xl text-center mb-20'
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            viewport={{ amount: 1, once: true }}>
                            Perguntas Frequentes
                        </motion.h1>
                        <Faqs />
                    </div>

                    <BoxModal
                        funcao={() => handleFilter("concurso público")}
                        title={"Pronto para começar a sua preparação?"}
                        text={"Não perca tempo! Quanto mais cedo começar a preparar-se, maiores serão as suas chances de sucesso. Entre em contacto connosco e saiba como podemos ajudá-lo a alcançar os seus objetivos."}
                        link1={"/cursos#start"}
                        link1Content={"Ver cursos preparatórios"}
                        link2={"/cursos#start"}
                        link2Content={"Contactar-nos agora"}
                    />
                </div>
            </section>
        </>
    )
}
