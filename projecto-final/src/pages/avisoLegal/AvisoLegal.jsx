
import React from 'react'
import { InfoContainer } from './InfoContainer'
import { motion } from 'motion/react'

export const AvisoLegal = () => {
    return (
        <>
            <section className='bg-secondary h-80'>
                <div className='max-w-7xl w-full h-full mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-center text-center'>
                    <h1 className='font-bold text-primary text-4xl lg:text-6xl'>Aviso Legal</h1>
                </div>
            </section>

            <div className='w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 my-20'>

                <section className='flex flex-col gap-7'>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, ease: "easeIn" }}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <InfoContainer
                            title={"1. Identificação da Escola"}
                            text={"A MindUp, NIPC 123456789, com sede em Lisboa, Portugal, é a entidade responsável pelo presente website."}
                            children={<p className='text-gray-600'><span className='font-semibold text-primary'>Contacto: </span>info@mindup.pt</p>}
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, ease: "easeIn" }}
                        viewport={{ once: true, amount: 0.3 }}
                    >

                        <InfoContainer
                            title={"2. Objeto do site"}
                            text={"Este website tem como finalidade fornecer informações sobre cursos de formação profissional, inscrições e atividades organizadas pela MindUp."}
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, ease: "easeIn" }}
                        viewport={{ once: true, amount: 0.3 }}
                    >

                        <InfoContainer
                            title={"3. Condições de utilização"}
                            text={"O acesso e utilização do site implicam a aceitação das presentes condições. O utilizador compromete-se a não realizar qualquer uso ilícito dos conteúdos disponíveis."}
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, ease: "easeIn" }}
                        viewport={{ once: true, amount: 0.3 }}
                    >

                        <InfoContainer
                            title={"4. Responsabilidade pelos conteúdos"}
                            text={"A MindUp reserva-se o direito de atualizar ou modificar os conteúdos sem aviso prévio. Não nos responsabilizamos por erros, omissões ou pelo uso indevido das informações apresentadas."}
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, ease: "easeIn" }}
                        viewport={{ once: true, amount: 0.3 }}
                    >

                        <InfoContainer
                            title={"5. Propriedade intelectual"}
                            text={"Todos os conteúdos, incluindo textos, imagens, logótipos e design, são propriedade da MindUp ou de terceiros autorizados. É proibida a reprodução sem consentimento prévio."}
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, ease: "easeIn" }}
                        viewport={{ once: true, amount: 0.3 }}
                    >

                        <InfoContainer
                            title={"6. Links externos"}
                            text={"Este site pode conter links para páginas de terceiros. A MindUp não se responsabiliza pelos conteúdos ou práticas de privacidade desses websites."}
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, ease: "easeIn" }}
                        viewport={{ once: true, amount: 0.3 }}
                    >

                        <InfoContainer
                            title={"7. Limitação de responsabilidade"}
                            text={"Não nos responsabilizamos por falhas técnicas, vírus ou quaisquer danos resultantes do uso do site."}
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, ease: "easeIn" }}
                        viewport={{ once: true, amount: 0.3 }}
                    >

                        <InfoContainer
                            title={"8. Proteção de dados"}
                            text={"A recolha e tratamento de dados pessoais cumprem o Regulamento Geral de Proteção de Dados (RGPD). Consulte a Política de Privacidade e a Política de Cookies para mais informações."}
                        />
                    </motion.div>

                    <footer className='bg-secondary text-center text-hightlight p-5 rounded-lg border border-realce my-5'>
                        <p>Para esclarecimentos adicionais sobre este aviso legal, entre em contacto através do email</p>
                        <a className='underline underline-offset-2 font-semibold' href="mailto:info@mindup.pt">info@mindup.pt</a>
                    </footer>
                </section>
            </div>
        </>
    )
}
