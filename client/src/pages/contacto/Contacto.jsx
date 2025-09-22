import React from 'react'
import { HeroDiv } from '../../components/HeroDiv'
import { Form } from '../../components/Form'
import { Map } from '../../components/Map'
import { InfoCard } from './InfoCard'
import { GrLocation } from 'react-icons/gr'
import { BiPhone } from 'react-icons/bi'
import { HiOutlineMail } from "react-icons/hi";
import { MdAccessTime } from "react-icons/md";
import { motion } from 'motion/react'

export const Contacto = () => {
  return (
    <>
      {/* hero section */}
      <section className='bg-black relative'>
        <div className='absolute w-full h-full bg-[url("/images/fundo-contacto.jpg")] bg-cover bg-center opacity-55'></div>
        <div className='max-w-7xl w-full mx-auto px-4 py-16 lg:px-8 flex flex-col md:flex-row gap-4 justify-between'>
          <motion.div 
            initial={{opacity: 0, x: -20}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 0.6, ease: "easeIn"}}
            viewport={{once: true}}
          >
            <HeroDiv imagem={'/images/destaque-contacto.jpg'} percentage={"95%"} text={"Taxa de sucesso"} />
          </motion.div>
        </div>
      </section>

      {/* conteúdo da página */}
      <section>
        <div className='w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mb-12'>
          <div className='text-center my-20'>
            <motion.h1 id='start' className='font-bold text-2xl lg:text-4xl text-primary mb-5'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ amount: 1, once: true }}
              >
              Teremos todo o prazer em falar consigo
            </motion.h1>
            <p>Estamos ansiosos para tirar todas as suas dúvidas</p>
          </div>

          {/* grid container */}
          <div className='grid md:grid-cols-3 gap-5'>

            {/* div do form e mapa */}
            <div className='grid md:col-span-2 gap-5'>
              <div className='shadow-[var(--boxShadow2)] rounded-2xl'>
                <Form />
              </div>
              <div className='shadow-[var(--boxShadow2)] rounded-2xl'>
                <Map />
              </div>
            </div>

            {/* div das informações */}
            <div className='flex flex-col gap-5'>

              <div className='shadow-[var(--boxShadow2)] rounded-2xl'>
                <InfoCard icon={GrLocation} title={"Morada"}>
                  <p>
                    Rua do Alecrim, 75 <br />
                    2845-003 <br />
                    Portugal
                  </p>
                </InfoCard>
              </div>

              <div className='shadow-[var(--boxShadow2)] rounded-2xl'>
                <InfoCard icon={BiPhone} title={"Telefone"}>
                  <p>+351 21 123 456</p>
                  <p>+351 994 955 676</p>
                </InfoCard>
              </div>

              <div className='shadow-[var(--boxShadow2)] rounded-2xl'>
                <InfoCard icon={HiOutlineMail} title={"Telefone"}>
                  <p>info@mindup.pt</p>
                  <p>admissoes@mindup.pt</p>
                </InfoCard>
              </div>

              <div className='shadow-[var(--boxShadow2)] rounded-2xl'>
                <InfoCard icon={MdAccessTime} title={"Horário"}>
                  <p>Segunda a Sexta: 9h - 20h</p>
                  <p>Sábado: 9h - 17h</p>
                  <p>Domingo: Encerrado</p>
                </InfoCard>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  )
}
