import React from 'react'
import { HeroDiv } from '../../components/HeroDiv'
import imagem1 from '../../assets/imagem1.jpg'

export const Cursos = () => {
  return (
    <>
      <section>
        <div className='mt-50'>

          <HeroDiv imagem={imagem1} percentage={50} text={"Taxa de sucesso"} />
        </div>
      </section>
    </>
  )
}
