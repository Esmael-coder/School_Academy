import React from 'react'
import { InfoContainer } from './InfoContainer'
import { GoDatabase } from "react-icons/go";
import { FiFileText } from "react-icons/fi";
import { FiShield } from "react-icons/fi";
export const PoliticaPrivacidade = () => {
    return (
        <>

            <section className='bg-secondary h-80'>
                <div className='max-w-7xl w-full h-full mx-auto px-4 md:px-6 lg:px-8 flex flex-col items-center justify-center gap-3 text-center'>
                    <h1 className='font-bold text-primary text-4xl lg:text-6xl'>Política de Privacidade</h1>
                    <p className='text-cinza'>A sua privacidade é a nossa prioridade. Saiba como protegemos e respeitamos os seus dados pessoais.</p>
                </div>
            </section>

            <section>
                <div className='max-w-7xl w-full mx-auto px-4 md:px-6 lg:px-8 py-20 flex flex-col gap-10'>
                    <InfoContainer icon={<GoDatabase size={26} />} title={"Recolha de dados"}>
                        <h3 className='text-primary font-semibold mb-6'>Informações que nos fornece diretamente:</h3>
                        <ul className='list-inside list-disc text-cinza flex flex-col gap-3'>
                            <li>Nome completo e dados de contacto (email, telefone)</li>
                            <li>Informações de inscrição em cursos</li>
                            <li>Dados de pagamento (processados por terceiros seguros)</li>
                            <li>Comunicações connosco (emails, formulários de contacto)</li>
                        </ul>
                    </InfoContainer>

                    <InfoContainer icon={<FiFileText size={26} />} title={"Utilização de dados"}>
                        <p className='mb-3'>Utilizamos as suas informações pessoais para os seguintes propósitos:</p>
                        <h3 className='text-primary font-semibold mb-6'>Prestação de serviços:</h3>
                        <ul className='list-inside list-disc text-cinza flex flex-col gap-3'>
                            <li>Processar inscrições em cursos e exames</li>
                            <li>Fornecer materiais educacionais e suporte</li>
                            <li>Comunicar sobre os seus cursos e progresso</li>
                            <li>Processar pagamentos e emitir faturas</li>
                        </ul>
                    </InfoContainer>

                    <InfoContainer icon={<FiShield size={26} />} title={"Armazenamento e Segurança"}>
                        <p className='mb-3'>A segurança dos seus dados é a nossa prioridade. Implementamos medidas técnicas e organizacionais rigorosas:</p>
                        <h3 className='text-primary font-semibold mb-6'>Medidas de segurança:</h3>
                        <ul className='list-inside list-disc text-cinza flex flex-col gap-3 mb-4'>
                            <li>Encriptação SSL/TLS para todas as transmissões de dados</li>
                            <li>Servidores seguros com acesso restrito e monitorizado</li>
                            <li>Backups regulares e seguros dos dados</li>
                        </ul>

                        <h3 className='text-primary font-semibold mb-6'>Armazenamento:</h3>
                        <ul className='list-inside list-disc text-cinza flex flex-col gap-3'>
                            <li>Conformidade com o RGPD e legislação portuguesa</li>
                            <li>Retenção de dados apenas pelo período necessário</li>
                            <li>Eliminação segura de dados quando não são mais necessários</li>
                        </ul>
                    </InfoContainer>
                </div>
            </section>
        </>
    )
}
