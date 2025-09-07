
import React from 'react'
import { MethodComponent } from './MethodComponent'
import { method } from '../../const/Constants'
import { VantageCard } from './VantageCard'
import { Table } from './Table'

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
          <div className='pt-10 text-cinza flex gap-10 flex-col lg:flex-row'>
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
            <img className='rounded-lg max-w-[500px]' src="images/sobre-nos.jpg" alt="imagem de uma professora" />
          </div>
        </section>

        {/* Metodologia */}
        <section>
          <div className='pt-10 mb-20'>

            <div className='text-center text-cinza mb-10'>
              <span className='py-1 px-2 rounded-md bg-secondary text-hightlight border border-hightlight'>Como funciona</span>
              <h1 className='text-primary text-2xl font-bold mt-2 mb-5'>A nossa metodologia</h1>
              <p>
                A nossa metodologia combina experiência prática, inovação e acompanhamento personalizado,
                garantindo que cada aluno desenvolva as competências necessárias para alcançar os seus objetivos.
              </p>
            </div>
            <div className='flex items-center justify-center mb-20'>
              <div className='grid md:grid-cols-2  lg:grid-cols-4 gap-5'>
                {method.map(element => (
                  <MethodComponent key={element.id}
                    img={element.img}
                    title={element.title}
                    text={element.text}
                  />
                ))}
              </div>
            </div>

            <div className='flex justify-center'>
              <div className='w-[800px] overflow-x-auto'>
              <Table />
              </div>
            </div>

          </div>
        </section>
        {/* nossos diferenciais */}
        <section>
          <div className='pt-10'>
            <div className='text-center mb-10'>
              <span className='py-1 px-2 rounded-md bg-secondary text-hightlight border border-hightlight'>Vantagens únicas</span>
              <h1 className='text-primary font-bold text-2xl mb-5 mt-2'>O que nos diferencia?</h1>
              <p>Características que nos destinguem e fazem a diferença nos seus estudos.</p>
            </div>
            <div>
              <VantageCard />
            </div>
          </div>
        </section>

      </div>
    </>
  )
}

