import React from 'react'
import { GrLocation } from "react-icons/gr";

export const Map = () => {
    return (
        <div className='p-6'>
            <div className='flex items-center gap-2 mb-7'>
                <div className='bg-secondary p-2 rounded-lg'>
                    <GrLocation size={20} />
                </div>
                <h2>Nossa localização</h2>
            </div>

            <div
                className='bg-ice rounded-lg h-[250px] mb-5'>
            </div>

            <div className='bg-ice p-4 rounded-lg'>
                <p className='text-cinza'>
                    <span className='font-semibold'>Como chegar: </span>
                    Próximo ao Metro Marquês de Pombal. Várias linhas de autocarro param na proximidade. Estacionamento público disponível na zona.
                </p>
            </div>
        </div>
    )
}
