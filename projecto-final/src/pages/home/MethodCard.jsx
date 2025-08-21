
import React from 'react'
import { method } from '../../const/Constants'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'

export const MethodCard = () => {

    return (


        <div className='mt-3 md:mt-0'>

            {/* Versão mobile */}
            <div className='md:hidden flex w-full' >
                <Swiper
                    modules={[Navigation]}

                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    navigation
                    className="arrow" //classe arrow foi definida no index.css
                >
                    {
                        method.map(element => (

                            <SwiperSlide>

                                <div key={element.id} className='px-10 text-center'>
                                    <h2 className='font-semibold text-xl mb-2'>{element.title}</h2>
                                    <p className='text-cinza'>{element.description}</p>
                                </div>

                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>

            {/* Versão desktop */}
            <div className='hidden w-full md:flex justify-between'>
                {
                    method.map(element => (


                        <div key={element.id} className='w-[200px] lg:w-[300px] p-4 hover:shadow-xl rounded-xl transition-all duration-300 ease-in'>
                            <img src={element.image} alt="ilustração" />

                            <div className='text-center'>
                                <h2 className='font-semibold text-xl mb-2'>{element.title}</h2>
                                <p className='text-cinza'>{element.description}</p>
                            </div>
                        </div>


                    ))
                }
            </div>

        </div>


    )
}
