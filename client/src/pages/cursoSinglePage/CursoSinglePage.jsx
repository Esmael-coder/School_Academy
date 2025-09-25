
import React from 'react'
import { useParams } from 'react-router-dom'
import { courses } from '../../const/Constants'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { BiHome } from 'react-icons/bi'
import { BsCheck2Circle } from "react-icons/bs";
import { CgEditBlackPoint } from "react-icons/cg";
import { GrCertificate } from "react-icons/gr";
import { MdAccessTime } from "react-icons/md";
import { VscSymbolMethod } from "react-icons/vsc";
import { FiCalendar } from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import { Faqs } from '../../components/Faqs'
import { easeIn } from 'motion';
import { motion } from 'motion/react';


export const CursoSinglePage = () => {
  const { id } = useParams()

  const selectedCourse = (courses.find(course => course.id == id))

  
  const contentIncluded = [
    "Acesso durante 1 ano e 6 meses",
    "Mentoria individual",
    "Certificado profissional",
    "Material didático"
  ]


  return (

    <>
      <header className='w-full bg-primary h-10 text-white whitespace-nowrap'>
        <nav className='w-full h-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex justify-between items-center'>
          <div className='hidden md:flex gap-2'>
            <Link
              className='flex items-center gap-1'
              to={"/"}>
              <BiHome />
              <span className='hover:underline underline-offset-2'>Home</span> /
            </Link>

            <Link to={"/cursos"}>
              <span className='hover:underline underline-offset-2'>Cursos</span> /
            </Link>
            {selectedCourse.name}
          </div>

          <Link
            className='flex items-center gap-2'
            to={"/cursos"}>
            <MdOutlineKeyboardBackspace />
            <span className='hover:underline underline-offset-2'>Voltar aos cursos</span>
          </Link>
        </nav>
      </header>


      <div className='w-full max-w-7xl my-10 mx-auto px-4 md:px-6 lg:px-8 '>

        <div className='md:grid md:grid-cols-3 md:gap-x-10 relative'>
          <section className='col-span-2'>
            <div className='mb-10'>
              <h1 className='text-primary font-bold text-3xl lg:text-4xl  mb-5'>{selectedCourse.name}</h1>
              <p className='text-gray-600 text-xl mb-5'>{selectedCourse.description}</p>
              <p className='mb-6'>{selectedCourse.descriptionLong}</p>
              <img className='w-full rounded-xl max-w-[650px]' src={selectedCourse.image} alt={selectedCourse.name} />
            </div>

            <div className='mb-10'>
              <h1 className='text-primary font-bold text-3xl lg:text-4xl mb-5'>O que nos diferencia ?</h1>
              <ul className='mb-6'>
                {selectedCourse.advantages.map((advantage, index) => (
                  <li key={index} className='flex items-center gap-2 mb-4'>
                    <BsCheck2Circle className='min-w-[18px] text-orange' />
                    {advantage}
                  </li>
                ))}
              </ul>
            </div>

            <div className='mb-10'>
              <h1 className='text-primary font-bold text-3xl lg:text-4xl mb-5'>O que Vai Aprender</h1>
              <p className='mb-5'>O nosso programa abrangente cobre todas as tecnologias essenciais para se tornar um profissional completo.</p>
              <div>
                <ul className='flex flex-col gap-4'>
                  {
                    selectedCourse.program.map((prog, index) => (
                      <li
                        key={index}
                        className='flex items-center gap-2 p-4 bg-secondary rounded-md border border-realce'>
                        <span className='w-5 h-5 rounded-full bg-orange text-white flex items-center justify-center'>
                          {index + 1}
                        </span>
                        {prog}
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>

            <div className='mb-10'>
              <h1 className='text-primary font-bold text-3xl lg:text-4xl mb-5'>Oportunidades de carreira</h1>
              <p className='mb-5'>Com as competências adquiridas neste curso, poderá candidatar-se a diversos cargos profissionais.</p>

              <ul className='flex flex-col gap-2'>
                {selectedCourse.careers.map((career, index) => (
                  <li
                    className='flex items-center gap-2'
                    key={index}>
                    <CgEditBlackPoint size={20} className='text-orange' />
                    {career}
                  </li>
                ))}
              </ul>
            </div>

          </section>

          {/* aside começa aqui */}
          <motion.aside className='md:max-w-[350px] sticky top-24 mb-10 h-fit'
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, easeIn }}
            viewport={{ once: true }}
          >
            <div className='p-4 rounded-lg shadow-[var(--boxShadow2)]'>
              <div className='mb-5'>
                <h3 className='flex items-center gap-2 text-primary'>
                  <MdAccessTime className='text-orange' />
                  Duração
                </h3>
                <span className='text-gray-600 pl-6'>{selectedCourse.duration}</span>
              </div>

              <div className='mb-5'>
                <h3 className='flex items-center gap-2 text-primary'>
                  <VscSymbolMethod className='text-orange' />
                  Modalidade
                </h3>
                <span className='text-gray-600 pl-6'>{selectedCourse.method}</span>
              </div>

              <div className='mb-5'>
                <h3 className='flex items-center gap-2 text-primary'>
                  <FiCalendar className='text-orange' />
                  Início
                </h3>
                <span className='text-gray-600 pl-6'>Imediato</span>
              </div>

              <HashLink smooth to={"/contacto#nome"} className='flex items-center justify-center gap-3 bg-orange hover:bg-hover text-white p-1.5 rounded-md mb-3 transition-all duration-300 ease-in-out '>
                Inscrever Agora
                <FaArrowRightLong />
              </HashLink>

              <a href='tel:+351 21 573 496' className='cursor-pointer flex items-center justify-center gap-3 bg-white text-orange hover:bg-hover hover:text-white border p-1.5 rounded-md transition-all duration-300 ease-in-out '>
                Ligar agora
              </a>

              <div className='mt-8 border-t border-zinc-300'>
                <h3 className='text-primary mb-5 pt-5 font-semibold'>Incluido</h3>
                <ul>
                  {contentIncluded.map((content, index) => (
                    <li key={index} className='flex items-center gap-2'>
                      <BsCheck2Circle className='text-green-600' />
                      {content}
                    </li>
                  ))}
                </ul>
              </div>

              <div className='mt-5 p-2 border border-realce rounded-md bg-secondary'>
                <h3 className='text-primary mb-2 font-semibold'>Material informativo</h3>
                <a
                  className='flex items-center gap-1 bg-white p-1 rounded-sm border border-realce hover:text-hightlight transition-all duration-100 ease-in '
                  href={selectedCourse.image}
                  download={selectedCourse.image}>
                  <MdOutlineFileDownload size={20} />
                  Baixar pdf
                </a>
              </div>
            </div>
          </motion.aside>
        </div>

        <section>
          <div className='w-full bg-secondary flex flex-col items-center p-5 rounded-lg border border-realce'>
            <GrCertificate size={60} className='text-orange mb-2' />
            <h2 className='font-bold text-primary text-2xl mb-5'>Certificação profissional</h2>
            {selectedCourse.category == "concurso público" ?
              <p className='text-center'>Ao concluir o curso com sucesso, receberá  <strong>{selectedCourse.certificate}</strong>, e que valida as suas competências.</p>
              : <p className='text-center'>Ao concluir o curso com sucesso, receberá  <strong>{selectedCourse.certificate}</strong>, reconhecido pela indústria e que valida as suas competências.</p>}
          </div>
        </section>

        <section>
          <div className='my-30 max-w-5xl mx-auto'>
            <h1 className='text-primary font-bold text-3xl lg:text-4xl text-center mb-20'>Dúvidas frequentes</h1>
            <Faqs />
          </div>
        </section>

      </div>
    </>
  )
}
