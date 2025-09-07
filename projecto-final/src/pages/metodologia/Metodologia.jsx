
import React from 'react'
import { Method } from './method'

export const Metodologia = () => {
  return (

    <>
      {/* hero section */}
      <section>
        <div className='w-full py-40 mx-auto px-4 md:px-6 lg:px-8 bg-secondary'>
          <h1 className='text-5xl font-bold text-primary text-center'>Metodologia</h1>
        </div>
      </section>

      <div className='w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16'>

        {/* sobre nos */}
        <section>
          <div className='py-16 text-cinza flex gap-5 flex-col md:flex-row'>
            <article>
              <h1 className='text-2xl font-bold text-primary mb-5'>Quem somos</h1>
              <p className='mb-5'>
                Somos uma instituição de ensino com mais de 15 anos de experiência,
                dedicada a oferecer formações de qualidade em diversas áreas do conhecimento.
                A nossa missão é transformar aspirações em conquistas reais, ajudando cada aluno a alcançar os seus objetivos pessoais e profissionais.
              </p>

              <p>
                Contamos com uma equipa de professores altamente qualificados e uma metodologia testada e refinada ao longo dos anos.
                Orgulhamo-nos de já termos apoiado centenas de estudantes e profissionais que hoje desempenham funções de destaque tanto na administração pública como em diferentes setores da sociedade.
              </p>
            </article>
            <img className='rounded-lg' src="images/sobre-nos.jpg" alt="imagem de uma professora" />
          </div>
        </section>

        {/* Metodologia */}
        <section>
          <div className='text-center text-cinza'>
            <h1 className='text-primary text-2xl font-bold mb-5'>A nossa metodologia</h1>
            <p>
              A nossa metodologia combina experiência prática, inovação e acompanhamento personalizado,
              garantindo que cada aluno desenvolva as competências necessárias para alcançar os seus objetivos.
            </p>
          </div>

          <div>
          </div>
        </section>

      </div>
    </>
  )
}

