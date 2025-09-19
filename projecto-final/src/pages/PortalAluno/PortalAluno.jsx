import { LuNotebookText } from "react-icons/lu";
import { AiTwotoneFilePdf } from "react-icons/ai";
import React from 'react'

export const PortalAluno = () => {
  return (
    <div className='w-full max-w-7xl mx-auto py-6 px-4 md:px-6 lg:px-8'>

      <section className='w-full p-10 bg-hightlight text-white rounded-md'>
        <h1 className='font-semibold text-3xl lg:text-4xl mb-2'>Olá, Maria!</h1>
        <p>Continue sua jornada de aprendizado.</p>
      </section>

      <section className='mt-20'>
        <h2 className='text-primary text-2xl lg:text-3xl font-bold mb-4'>Meus cursos</h2>
        <div className='flex flex-col gap-5'>
          <div className='p-10 w-full rounded-md shadow-[var(--boxShadow2)]'>
            <h3>Indisponível</h3>
          </div>
          <div className='p-10 w-full rounded-md shadow-[var(--boxShadow2)]'>
            <h3>Indisponível</h3>
          </div>
          <div className='p-10 w-full rounded-md shadow-[var(--boxShadow2)]'>
            <h3>Indisponível</h3>
          </div>
          <div className='p-10 w-full rounded-md shadow-[var(--boxShadow2)]'>
            <h3>Indisponível</h3>
          </div>
        </div>
      </section>

      <section className='mt-10 p-4 shadow-[var(--boxShadow2)] rounded-md'>
        <h3 className='flex items-center gap-2 mb-4'>
          <LuNotebookText className="text-hightlight" size={20} />
          Materiais de apoio
        </h3>

        <div>


          <div className='flex flex-col p-4 rounded-md bg-sombra'>
            <h2 className="flex items-center gap-2">
              <AiTwotoneFilePdf className="text-red-600" size={20} />
              Livro do curso
            </h2>
            <span className="text-gray-600 text-sm pl-6">0 MB</span>
          </div>

          <div className='flex flex-col p-4 rounded-md bg-sombra'>
            <h2 className="flex items-center gap-2">
              <AiTwotoneFilePdf className="text-red-600" size={20} />
              Livro do curso
            </h2>
            <span className="text-gray-600 text-sm pl-6">0 MB</span>
          </div>

          <div className='flex flex-col p-4 rounded-md bg-sombra'>
            <h2 className="flex items-center gap-2">
              <AiTwotoneFilePdf className="text-red-600" size={20} />
              Livro do curso
            </h2>
            <span className="text-gray-600 text-sm pl-6">0 MB</span>
          </div>

          <div className='flex flex-col p-4 rounded-md bg-sombra'>
            <h2 className="flex items-center gap-2">
              <AiTwotoneFilePdf className="text-red-600" size={20} />
              Livro do curso
            </h2>
            <span className="text-gray-600 text-sm pl-6">0 MB</span>
          </div>
        </div>
      </section>
    </div>
  )
}
