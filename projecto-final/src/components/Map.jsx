import React from 'react'
import { GrLocation } from "react-icons/gr";

export const Map = () => {
    return (
        <div className='p-6'>
            <div className='flex items-center gap-2 mb-7'>
                <div className='bg-secondary text-orange p-2 rounded-lg'>
                    <GrLocation size={20} />
                </div>
                <h2>Nossa localização</h2>
            </div>

            <div
                className='bg-sombra rounded-lg h-[350px] mb-5'>
                    <iframe
                    className='w-full h-full' 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d17964.8773905426!2d-9.151432853899871!3d38.745621698612574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-PT!2spt!4v1756902690105!5m2!1spt-PT!2spt" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div className='bg-sombra p-4 rounded-lg'>
                <p className='text-gray-600'>
                    <span className='font-semibold'>Como chegar: </span>
                    Próximo ao Metro Marquês de Pombal. Várias linhas de autocarro param na proximidade. Estacionamento público disponível na zona.
                </p>
            </div>
        </div>
    )
}
