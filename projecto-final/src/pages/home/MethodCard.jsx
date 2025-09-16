
import React from 'react'
import { method } from '../../const/Constants'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { motion } from 'motion/react'

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
                        method.slice(0, 3).map(element => (

                            <SwiperSlide>

                                <div key={element.id} className='px-10 text-center'>
                                    <h2 className='font-semibold text-xl mb-2'>{element.title}</h2>
                                    <p className='text-gray-600'>{element.text}</p>
                                </div>

                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>

            {/* Versão desktop */}
            <div className='hidden w-full md:flex justify-between'>
                {method.slice(0, 3).map(element => (
                    <motion.div
                        key={element.id}
                        className='w-[200px] lg:w-[300px] flex flex-col justify-between p-4 hover:shadow-xl rounded-xl transition-shadow duration-300 ease-in'
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: element.id * 0.2 }}
                        viewport={{ amount: 0.3, once: true }}>

                        <img src={element.img} alt="ilustração" />
                        <div className='text-center'>
                            <h2 className='font-semibold text-xl mb-2'>{element.title}</h2>
                            <p className='text-gray-600'>{element.text}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>


    )
}
