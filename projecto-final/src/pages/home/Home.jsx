
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import { HeroDiv } from '../../components/HeroDiv'
import { homeComponents } from './index';
import Imagem1 from '../../assets/imagem1.jpg'
import { BiCalendarCheck, BiRightArrowAlt, BiConversation, BiPhoneCall } from "react-icons/bi";
import { MdAutoGraph } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { category, testimoniolsData } from '../../const/Constants';

export const Home = () => {

  const [Container, MethodCard, Footer, Testimoniols] = homeComponents

  return (

    <>
      <section className='pt-10 pb-12 bg-cover bg-center' style={{ backgroundImage: "url('/images/hero-cover.jpg')" }}>
        <div className='flex flex-col md:flex-row max-w-7xl mx-auto px-4 lg:px-8 gap-8'>

          {/* todo o conteúdo da hero section (já mexi tanto que ficou com muitas classes redundantes. refatorar depois)*/}
          <div className='flex flex-col md:flex-row gap-8 items-center'>
            <div className='flex flex-col md:order-1 lg:gap-7 gap-5'>
              <h1 className='text-primary font-bold text-2xl lg:text-3xl '>Queres participar nos concursos, mas não te sentes preparado?</h1>
              <p className='text-cinza'>
                Na MindUp ajudamos-te a ganhar confiança, melhorar as tuas competências e enfrentar qualquer desafio com segurança.
              </p>

              <div className='bg-azul flex flex-col items-start gap-4 shadow-md text-white rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 break-words'>
                <div className='flex items-center gap-1 text-cinza'>
                  <BiCalendarCheck />
                  <p>Proximo exame</p>
                </div>

                <div>
                  <h2 className='font-semibold text-xl'>15 de março de 2026</h2>
                  <p className='text-cinza'>Faltam 519 dias - GNR </p>
                </div>

                <Link className='py-[5px] px-2 bg-white text-azul rounded-md' to="/"> Ver todos os exames</Link>
              </div>

              <div className='flex flex-col md:flex-row text-center gap-4'>

                <Link
                  className='py-2.5 px-2 bg-orange text-white shadow-md rounded-md w-full md:w-auto' to="/" > Ver cursos disponíveis
                  <BiRightArrowAlt size={24} className='inline-block' />
                </Link>

                <Link
                  className='py-2.5 px-2 bg-white text-azul shadow-md rounded-md w-full md:w-auto'
                  to="/" > Receber orientação
                  <BiConversation size={24} className='inline-block' />
                </Link>
              </div>
            </div>
            <HeroDiv imagem={Imagem1} percentage="95%" text="Taxa de aprovação" />
          </div>
        </div>
      </section>

      {/* category section, apresentaçao simples  */}

      <section className='bg-[linear-gradient(135deg,#f8fafc_0%,#d6edf5_100%)]'>
        <div className='max-w-7xl mx-auto px-4 pt-20 sm:px-6 lg:px-8 '>


          <div className='flex flex-col gap-9 md:flex-row md:items-center md:gap-24'>
            <div className='flex flex-col gap-4 md:order-1 w-full'>
              <div>
                <h1 className='font-semibold text-2xl md:font-bold md:text-4xl'>Já sabes qual a tua vocação?</h1>
                <p className='mt-4 mb-5 text-cinza'>Escolhe a área de estudos que mais se adequa aos teus objetivos profissionais.</p>
              </div>

              {
                category.map(item => (
                  <Container key={item.id} icon={item.icon} content={item.name} />
                )
                )
              }

              <div className='flex items-center justify-center md:self-center gap-2 p-3 my-5 bg-orange text-white rounded-xl coursor-pointer hover:shadow-lg'>
                <Link to={"/"}>Receber orientação</Link>
                <BiPhoneCall size={20} />
              </div>
            </div>

            <div className='self-center w-[250px] sm:w-[400px] md:w-[600px] md:self-end'>
              <img src='images/student.png' />
            </div>
          </div>
        </div>
      </section>

      {/* section Metodologia */}
      <section>
        <div className='px-4 pt-10 md:pt-20 md:px-6 mb-16 lg:px-8 max-w-7xl mx-auto flex flex-col gap-9'>
          <div className='text-center'>
            <h1 className='font-semibold text-2xl md:font-bold md:text-4xl'>A Nossa metodologia</h1>
            <p className='mt-4 text-cinza'>Aprendizado flexível que une teoria, prática e inovação</p>
          </div>

          < MethodCard />

          <div className='flex items-center justify-center md:w-fit md:mx-auto gap-2 p-3 bg-orange text-white rounded-xl cursor-pointer hover:shadow-lg'>
            <Link to={"/"}>Veja como funciona</Link>
            <MdAutoGraph size={20} />
          </div>
        </div>
        <Footer />
      </section>

      {/* section de testemunhas */}
      <section className='bg-ice'>
        <div className='max-w-7xl mx-auto px-4 py-10 sm:p-6 md:p-8'>
          <h1 className='text-center font-bold text-2xl text-azul'>Opiniões dos Ex-alunos</h1>
          <p className='text-center text-orange mb-10'>O que dizem sobre a MindUp</p>

          <div className='w-full flex justify-center'>
            <Swiper
              modules={[Pagination]}
              slidesPerView={1}
              spaceBetween={0}
              pagination
              className='pagination w-full mx-0'
            >
              {
                testimoniolsData.map(data => (
                  <SwiperSlide>
                    <div className='flex justify-center pb-9'>
                      <Testimoniols
                        key={data.id}
                        name={data.name}
                        course={data.course}
                        testimony={data.testimony}
                      />
                    </div>
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
        </div>
      </section>
    </>




  )
}
