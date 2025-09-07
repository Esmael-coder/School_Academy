import React from 'react'

export const Table = () => {
    return (
        <table className='table-fixed min-w-4xl max-w-6xl border-collapse bg-white text-sm'>
            <thead>
                <tr className='bg-secondary text-gray-700 text-sm tracking-wider'>
                    <th className='px-2 py-3'>Dia da semana</th>
                    <th className='px-2 py-3'>Horário</th>
                    <th className='px-2 py-3'>Actividade</th>
                </tr>
            </thead>

            <tbody className='divide-y divide-gray-200'>
                <tr className='hover:bg-gray-50 transition-colors'>
                    <td className='px-2 py-3'>Segunda-feira</td>
                    <td className='px-2 py-3 text-center'>17h - 19h</td>
                    <td className='px-2 py-3 text-center'>Aula presencial</td>
                </tr>
                <tr className='hover:bg-gray-50 transition-colors'>
                    <td className='px-2 py-3'>Terça-feira</td>
                    <td className='px-2 py-3 text-center'>17h - 18h</td>
                    <td className='px-2 py-3 text-center'>Aula de duvidas online</td>
                </tr>
                <tr className='hover:bg-gray-50 transition-colors'>
                    <td className='px-2 py-3'>Quarta-feira</td>
                    <td className='px-2 py-3 text-center'>47h - 49h</td>
                    <td className='px-2 py-3 text-center'>Aula online  e tutoria</td>
                </tr>
                <tr className='hover:bg-gray-50 transition-colors'>
                    <td className='px-2 py-3'>Quinta-feira</td>
                    <td className='px-2 py-3 text-center'>17h - 19h30</td>
                    <td className='px-2 py-3 text-center'>Exercícios práticos</td>
                </tr>
                <tr className='hover:bg-gray-50 transition-colors'>
                    <td className='px-2 py-3'>sexta-feira</td>
                    <td className='px-2 py-3 text-center'>17h - 19h</td>
                    <td className='px-2 py-3 text-center'>Tutoria individual</td>
                </tr>
                <tr className='hover:bg-gray-50 transition-colors'>
                    <td className='px-2 py-3'>Sábado</td>
                    <td className='px-2 py-3 text-center'>9h - 11h</td>
                    <td className='px-2 py-3 text-center'>Aula prática</td>
                </tr>
            </tbody>

            <tfoot>
                <tr>
                    <td colSpan={3} className='px-2 py-3 bg-secondary text-cinza'>
                        <strong>Nota:</strong> Os horários podem sofrer pequenos ajustes conforme necessidades pedagógicas.
                        Todas as alterações serão comunicadas com antecedência mínima de uma semana.
                    </td>
                </tr>
            </tfoot>
        </table>
    )
}
