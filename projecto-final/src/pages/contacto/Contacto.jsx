import React from 'react'
import { HeroDiv } from '../../components/HeroDiv'
import Imagem1 from '../../assets/imagem1.jpg'
import { Form } from '../../components/Form'

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
          <div>
            {/* div do form e mapa */}
            <div>
              <Form />
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
