import React from 'react'
import { HeroDiv } from '../../components/HeroDiv'
import Imagem1 from '../../assets/imagem1.jpg'
import { Form } from '../../components/Form'
import { Map } from '../../components/Map'

export const Contacto = () => {
  return (
    <>
      {/* hero section */}
      <section className='bg-ice'>
        <div className='max-w-7xl w-full mx-auto px-4 py-16 lg:px-8'>
          <HeroDiv imagem={Imagem1} percentage={"50%"} text={"Taxa de sucesso"} className='bg-ice' />
        </div>
      </section>

      {/* conteúdo da página */}
      <section>
        <div className='w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mb-12'>
          <div className='text-center my-12'>
            <h1>Teremos todo o prazer e falar consigo</h1>
            <p>Estamos ansiosos para tirar todas as suas dúvidas</p>
          </div>

          {/* grid container */}
          <div>

            {/* div do form e mapa */}
            <div>
              <div className='shadow-[var(--boxShadow)] rounded-2xl'>
                <Form />
              </div>
              <div className='shadow-[var(--boxShadow)] rounded-2xl'>
                <Map />
              </div>
            </div>

            {/* div das informações */}
            <div>

            </div>

          </div>
        </div>
      </section>
    </>
  )
}
