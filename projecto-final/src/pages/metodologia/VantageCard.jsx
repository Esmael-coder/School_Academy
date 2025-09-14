import React from 'react'
import { motion } from 'motion/react'

export const VantageCard = () => {
    return (
        <div className='flex flex-col lg:flex-row gap-10'>
            <ul className='flex flex-col gap-8'>
                <motion.li
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ amount: 1, once: true }}>
                    <h3 className='text-primary font-semibold bg-secondary px-2 py-1 rounded-md mb-2'>
                        Professores especializados
                    </h3>
                    <p className='pl-3 text-cinza'>Equipa docente com vasta experiência em concursos públicos e formação académica de excelência.</p>
                </motion.li>
                <motion.li
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ amount: 1, once: true }}>
                    <h3 className='text-primary font-semibold bg-secondary px-2 py-1 rounded-md mb-2'>
                        Metodologia inovadora
                    </h3>
                    <p className='pl-3 text-cinza'>Combinação única de técnicas tradicionais e modernas, adaptada aos desafios atuais.</p>
                </motion.li>
                <motion.li
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ amount: 1, once: true }}>
                    <h3 className='text-primary font-semibold bg-secondary px-2 py-1 rounded-md mb-2'>
                        Taxa de sucesso comprovada
                    </h3>
                    <p className='pl-3 text-cinza'>95% dos nossos alunos conseguem aprovação, muito acima da média nacional.</p>
                </motion.li>
                <motion.li
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ amount: 1, once: true }}>
                    <h3 className='text-primary font-semibold bg-secondary px-2 py-1 rounded-md mb-2'>
                        Tecnologia integrada
                    </h3>
                    <p className='pl-3 text-cinza'>Plataforma digital avançada com recursos interativos e acompanhamento em tempo real.</p>
                </motion.li>
            </ul>
            <motion.div className='self-center'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ amount: 0.3, once: true }}>
                <img className='rounded-lg w-full max-w-[500px] ' src="images/vantagem.jpg" alt="" />
            </motion.div>
        </div>
    )
}
