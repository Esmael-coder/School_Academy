
import React from 'react'
import { MethodComponent } from './MethodComponent'
import { method } from '../../const/Constants'
import { VantageCard } from './VantageCard'
import { Table } from './Table'
import { BoxModal } from '../../components/BoxModal'
import { motion } from 'motion/react'
import { div } from 'motion/react-client'

export const Metodologia = () => {

  return (

    <>
      {/* hero section */}
      <section className='bg-secondary h-80'>
        <div className='max-w-7xl w-full h-full mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-center'>
          <h1 className='font-bold text-primary text-4xl lg:text-6xl'>Metodologia</h1>
        </div>
      </section>

      <div className='w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16'>

        {/* sobre nos */}
        <section>
          <div className='text-cinza flex gap-10 flex-col lg:flex-row'>
            <article>
              <motion.h1 className='text-2xl lg:text-4xl font-bold text-primary mb-5'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ amount: 1, once: true }}>
                Quem somos?
              </motion.h1>
              <p className='mb-5'>
                Somos uma instituição de ensino com mais de 15 anos de experiência,
                dedicada a oferecer formações de qualidade em diversas áreas do conhecimento.
                A nossa missão é transformar aspirações em conquistas reais, ajudando cada aluno a alcançar os seus objetivos pessoais e profissionais.
              </p>

              <p>
                Contamos com uma equipa de professores altamente qualificados e uma metodologia testada e refinada ao longo dos anos.
                Orgulhamo-nos de já termos apoiado centenas de estudantes e profissionais que hoje desempenham funções de destaque tanto na administração pública como em diferentes setores da sociedade.
              </p>
            </article>
            <motion.div className='self-center'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ amount: 1, once: true }}>
              <img className='rounded-lg w-full max-w-[500px] min-w-[450px]' src="images/sobre-nos.jpg" alt="imagem de uma professora" />
            </motion.div>
          </div>
        </section>

        {/* Metodologia */}
        <section>
          <div className='pt-20'>

            <div className='text-center text-cinza mb-10'>
              <span className='py-1 px-2 rounded-md bg-secondary text-hightlight text-[13px]'>Como funciona</span>
              <motion.h1 className='text-primary text-2xl lg:text-4xl font-bold mt-2 mb-5'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ amount: 1, once: true }}>
                A nossa metodologia
              </motion.h1>
              <p>
                A nossa metodologia combina experiência prática, inovação e acompanhamento personalizado,
                garantindo que cada aluno desenvolva as competências necessárias para alcançar os seus objetivos.
              </p>
            </div>
            <div className='flex items-center justify-center mb-20'>
              <div className='grid md:grid-cols-2  lg:grid-cols-4 gap-5'>
                {method.map(element => (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: element.id * 0.2 }}
                    viewport={{ amount: 0.3, once: true }}>

                    <MethodComponent key={element.id}
                      img={element.img}
                      title={element.title}
                      text={element.text}
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            <div className='flex justify-center'>
              <div className='overflow-x-auto md:shadow-[var(--boxShadow2)]'>
                <Table />
              </div>
            </div>

          </div>
        </section>

        {/* nossos diferenciais */}
        <section>
          <div className='py-20'>
            <div className='text-center mb-10'>
              <span className='py-1 px-2 rounded-md bg-secondary text-hightlight text-[13px]'>Vantagens únicas</span>
              <motion.h1 className='text-primary font-bold text-2xl lg:text-4xl mb-5 mt-2'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ amount: 1, once: true }}>
                O que nos diferencia?
              </motion.h1>
              <p>Características que nos destinguem e fazem a diferença nos seus estudos.</p>
            </div>
            <div>
              <VantageCard />
            </div>
          </div>
        </section>

        <BoxModal
          title={"Pronto para começar a sua jornada?"}
          text={"unte-se aos centenas de alunos que já conquistaram os seus objetivos com a nossa metodologia. O seu futuro profissional está ao seu alcance."}
          link1={"/cursos#start"}
          link1Content={"Explorar cursos"}
          link2={"/contacto#start"}
          link2Content={"Contactar-nos"}
        />

      </div>
    </>
  )
}

