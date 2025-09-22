import React from 'react'
import { HeroDiv } from '../../components/HeroDiv'
import { ExameCard } from '../../components/ExameCard'
import { concurse } from '../../const/Constants'
import { BoxModal } from '../../components/BoxModal'
import { Faqs } from '../../components/Faqs.jsx'
import { motion } from 'motion/react'
import { Box } from './Box.jsx'
import { FiTarget, FiUsers } from "react-icons/fi";
import { FaArrowTrendUp } from "react-icons/fa6";


const concurseCopy = [...concurse]
export const Exame = ({ handleFilter }) => {

    return (
        <>
            {/* hero section */}
            <section className='bg-black relative'>
                <div className='absolute w-full h-full bg-[url("images/fundo-exame.jpg")] bg-cover bg-top opacity-55'></div>
                <div className='max-w-7xl w-full mx-auto px-4 py-16 lg:px-8'>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeIn" }}
                        viewport={{ once: true }}
                    >
                        <HeroDiv imagem={'images/destaque-exame.jpg'} percentage={"95%"} text={"Taxa de aprovação"} />
                    </motion.div>
                </div>
            </section>

            <section>
                <div className='max-w-7xl w-full mx-auto px-4 py-16 lg:px-8'>
                    <motion.h1
                        className='mt-10 mb-3 text-primary font-bold text-3xl lg:text-4xl text-center'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ amount: 1, once: true }}>
                        Preparação especializada para exames
                    </motion.h1>
                    <p className='text-gray-600 text-center'>95% taxa de aprovação com a nossa preparação</p>

                    <div className='grid md:grid-cols-3 gap-10 my-20 justify-center p-2'>
                        <Box
                            icon={<FiTarget size={40} />}
                            title={"Material específico"}
                            text={"Apostilas desenvolvidas com base nas provas anteriores de cada concurso"}

                        />

                        <Box
                            icon={<FiUsers size={40} />}
                            title={"Simulados reais"}
                            text={"Reproduzimos as condições reais de cada exame para maximizar o seu desempenho"}

                        />

                        <Box
                            icon={<FaArrowTrendUp size={40} />}
                            title={"Acompanhamento Individual"}
                            text={"Cada aluno recebe feedback personalizado sobre seu progresso e áreas de melhoria"}

                        />
                    </div>

                    <div className='mb-5'>
                        <h2 className='text-primary font-bold text-2xl md:text-3xl'>Exames</h2>
                        <p className='text-gray-600'>Confira os principais concursos públicos com candidaturas abertas ou que abrirão em breve.</p>
                    </div>

                    <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3 mb-20'>

                        {concurseCopy.map(copy => (

                            <motion.div
                                key={copy.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: copy.id * 0.2 }}
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

                    <div className='max-w-5xl mx-auto my-30'>
                        <motion.h1
                            className='text-primary font-bold text-3xl lg:text-4xl text-center mb-20'
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
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
                        link2={"/contacto"}
                        link2Content={"Contactar-nos agora"}
                    />
                </div>
            </section>
        </>
    )
}
