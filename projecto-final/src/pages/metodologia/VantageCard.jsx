import React from 'react'

export const VantageCard = () => {
    return (
        <div className='flex flex-col gap-10'>
            <ul className='flex flex-col gap-4'>
                <li>
                    <h3 className='text-primary font-semibold bg-secondary px-2 py-1 rounded-md mb-2'>
                        Professores especializados
                    </h3>
                    <p className='pl-3 text-cinza'>Equipa docente com vasta experiência em concursos públicos e formação académica de excelência.</p>
                </li>
                <li>
                    <h3 className='text-primary font-semibold bg-secondary px-2 py-1 rounded-md mb-2'>
                        Metodologia inovadora
                    </h3>
                    <p className='pl-3 text-cinza'>Combinação única de técnicas tradicionais e modernas, adaptada aos desafios atuais.</p>
                </li>
                <li>
                    <h3 className='text-primary font-semibold bg-secondary px-2 py-1 rounded-md mb-2'>
                        Taxa de sucesso comprovada
                    </h3>
                    <p className='pl-3 text-cinza'>95% dos nossos alunos conseguem aprovação, muito acima da média nacional.</p>
                </li>
                <li>
                    <h3 className='text-primary font-semibold bg-secondary px-2 py-1 rounded-md mb-2'>
                        Tecnologia integrada
                    </h3>
                    <p className='pl-3 text-cinza'>Plataforma digital avançada com recursos interativos e acompanhamento em tempo real.</p>
                </li>
            </ul>
            <img className='rounded-lg' src="images/vantagem.jpg" alt="" />
        </div>
    )
}
