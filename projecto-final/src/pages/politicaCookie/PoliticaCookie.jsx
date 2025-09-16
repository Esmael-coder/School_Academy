import React from 'react'
import { motion } from 'motion/react'
import { InfoContainer } from '../../components/InfoContainer'
import { GoQuestion } from "react-icons/go";
import { LuCookie, LuSettings, LuRefreshCw, LuUserCheck } from "react-icons/lu";
import { FiTarget } from 'react-icons/fi';

export const PoliticaCookie = () => {

  return (
    <>
      <section className='bg-secondary h-80'>
        <div className='max-w-7xl w-full h-full mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-center text-center'>
          <h1 className='font-bold text-primary text-4xl lg:text-6xl'>Política de Cookies</h1>
        </div>
      </section>

      <div className='w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 my-20'>

        <section className='flex flex-col gap-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeIn" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <InfoContainer
              icon={<GoQuestion size={26} />}
              title={"O que são cookies?"}
              text={"Cookies são pequenos ficheiros de texto armazenados no dispositivo do utilizador quando visita o nosso site. Servem para melhorar a experiência de navegação e otimizar os serviços oferecidos."}

            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeIn" }}
            viewport={{ once: true, amount: 0.3 }}
          >

            <InfoContainer
              icon={<LuCookie size={26} />}
              title={"Tipos de cookies que utilizamos"}
              children={<ul className='flex flex-col gap-4 list-disc pl-5 marker:text-hightlight text-gray-600'>
                <li><p><span className='font-semibold text-primary'>Cookies essenciais: </span>necessários para o funcionamento básico do site.</p></li>
                <li><p><span className='font-semibold text-primary'>Cookies de desempenho: </span>Cookies de desempenho: permitem analisar como os utilizadores interagem com o site.</p></li>
                <li><p><span className='font-semibold text-primary'>Cookies de funcionalidade: </span>Cookies de funcionalidade: recordam preferências e personalizações.</p></li>
              </ul>}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeIn" }}
            viewport={{ once: true, amount: 0.3 }}
          >

            <InfoContainer
              icon={<FiTarget size={26} />}
              title={"Finalidade dos cookies"}
              text={"A MindUp utiliza cookies para garantir o bom funcionamento do site, melhorar a experiência de navegação, analisar estatísticas e, quando autorizado, apresentar conteúdos personalizados."}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeIn" }}
            viewport={{ once: true, amount: 0.3 }}
          >

            <InfoContainer
              icon={<LuSettings size={26} />}
              title={"Gestão de cookies"}
              text={"O utilizador pode aceitar, recusar ou configurar os cookies a qualquer momento através do banner de consentimento ou das definições do navegador. Tenha em conta que a desativação de alguns cookies pode afetar o funcionamento do site."}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeIn" }}
            viewport={{ once: true, amount: 0.3 }}
          >

            <InfoContainer
              icon={<LuUserCheck size={26} />}
              title={"Consentimento"}
              text={"Ao continuar a navegar no nosso site, considera-se que aceita o uso de cookies, salvo se tiver desativado essa funcionalidade no navegador ou no painel de gestão de cookies."}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeIn" }}
            viewport={{ once: true, amount: 0.3 }}
          >

            <InfoContainer
              icon={<LuRefreshCw size={26} />}
              title={"Alteração à política"}
              text={"A MindUp pode atualizar a presente Política de Cookies a qualquer momento. Recomendamos a sua consulta periódica."}
            />
          </motion.div>


          <footer className='max-w-5xl mx-auto bg-secondary text-center text-hightlight p-5 rounded-lg border border-realce my-5'>
            <h3 className='flex items-center gap-2 justify-center mb-2'>
              {<LuCookie size={20}/>}
              <span className='font-semibold'>Gestão de Cookies</span>
            </h3>
            <p>Para esclarecimentos adicionais sobre este aviso legal, entre em contacto através do email</p>
            <a className='underline underline-offset-2 font-semibold' href="mailto:info@mindup.pt">info@mindup.pt</a>
          </footer>
        </section>
      </div>
    </>
  )
}
