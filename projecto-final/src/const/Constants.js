
import { BiHome, BiPhone, BiMedal, BiBullseye, BiWorld, BiCheckCircle } from 'react-icons/bi'
import { MdOutlineSchool, MdAutoGraph } from 'react-icons/md'
import { courseImg } from '../assets/img/course/index'
import { svg } from '../assets/img/method/index'


const [army, auxiliarSaude, backend, bombeiro, energiaRenovavel, frontend, fullstack, mecanicoLigeiro, mecanicoPesado, painelSolar, redes, security] = courseImg

/* Não posso fechar os icones como tag porque js não aceita. tenho que fechar na hora de usar */

// link do menu principal
export const links = [

  { icon: BiHome, name: "Home", path: "/" },
  { icon: MdOutlineSchool, name: "Cursos", path: "/cursos" },
  { icon: MdAutoGraph, name: "Metodologia", path: "/metodologia" },
  { icon: MdAutoGraph, name: "Exame", path: "/exame" },
  { icon: BiPhone, name: "Contacto", path: "/contacto" }
]

export const category = [
  { id: 1, icon: BiMedal, name: "concurso público" },
  { id: 2, icon: BiBullseye, name: "segurança pública" },
  { id: 3, icon: BiWorld, name: "informática" },
  { id: 4, icon: BiCheckCircle, name: "saúde" },
]

export const faqs = [
  {
    id:1,
    question: "Qual é a duração dos cursos?",
    answer: "A duração varia de acordo com o curso. Alguns cursos podem durar 5 meses, enquanto outros mais completos podem durar mais. Detalhes específicos de cada curso estão disponíveis na nossa página de cursos."
  },
  {
    id:2,
    question: "A escola fornece certificado ao final do curso?",
    answer: "Sim! Todos os alunos que concluírem com sucesso os cursos recebem um certificado reconhecido, que pode ser utilizado para comprovar suas qualificações profissionais."
  },
  {
    id:3,
    question: "Há opções de ensino presencial e online?",
    answer: "Sim. Oferecemos cursos presenciais, online e híbridos, para que os alunos possam escolher o formato que melhor se adapta à sua rotina e necessidade de aprendizado."
  },
  {
    id:4,
    question: "A escola ajuda na inserção no mercado de trabalho?",
    answer: "Sim! Oferecemos orientação profissional, workshops de currículo e entrevistas, além de parcerias com empresas para facilitar estágios e oportunidades de emprego aos nossos alunos."
  },
  {
    id:5,
    question: "Existe suporte para dúvidas durante o curso?",
    answer: "Sim! Nossos alunos têm acesso a tutores e equipe de suporte para esclarecer dúvidas, seja presencialmente, por e-mail ou por plataformas online, garantindo um aprendizado contínuo."
  },
  {
    id:6,
    question: "Quais são as formas de pagamento disponíveis?",
    answer: "Aceitamos pagamentos por transferência bancária, cartão de crédito ou débito, e multibanco. Também oferecemos opções de parcelamento e descontos para inscrições antecipadas ou pagamento total à vista."
  }
]

const [online, presencial, diagnostico, simulacao] = svg

export const method = [

    {
        id: 1,
        title:"Aulas presenciais",
        text: "Encontros presenciais com acompanhamento próximo dos prefessores.",
        img: presencial

    },
    {
        id: 2,
        title:"Aulas online",
        text: "Aulas interativas e acessíveis de qualquer lugar. Estude onde e quando quiser",
        img: online

    },
    {
        id:4,
        title:"Diagnóstico individual",
        text: "Avaliação inicial para identificar pontos fortes e áreas de melhoria de cada aluno.",
        img: diagnostico

    },
    {
        id:5,
        title:"Simulações reais",
        text: "Simulações reais de exame e técnicas específicas para maximizar o desempenho.",
        img: simulacao

    }
    
]

export const testimoniolsData = [
  {
    id: 1,
    name: "Miguel Andrade",
    course: "Frontend developer",
    testimony: "O que mais gostei foi a abordagem prática: em cada módulo desenvolvíamos projetos reais que me ajudaram a consolidar o que estava a aprender."
  },
  {
    id: 2,
    name: "Ana Pereira",
    course: "Redes informáticas",
    testimony: "Hoje sinto-me confiante para atuar no mercado de trabalho, consigo diagnosticar e resolver falhas de rede e já penso em tirar certificações como a CCNA para avançar ainda mais na carreira."
  },
  {
    id: 3,
    name: "Maria Fernandes",
    course: "Auxiliar de Saúde",
    testimony: "Já trabalho numa clínica, sinto-me preparada e realizada por poder cuidar das pessoas com profissionalismo e dedicação. Este curso mudou a minha vida e abriu-me portas para o futuro."
  },
  {
    id: 4,
    name: "Carlos Almeida",
    course: "GNR",
    testimony: "Quando vi o meu nome na lista de aprovados, a sensação foi indescritível — uma mistura de alegria, alívio e gratidão."
  },
  {
    id: 5,
    name: "Joana Mato",
    course: "GNR",
    testimony: "Quando vi o meu nome na lista de aprovados, a sensação foi indescritível — uma mistura de alegria, alívio e gratidão."
  }
]

export const concurse = [
  {
    id: 1,
    course: "GNR - Guarda Nacional Republicana",
    category: "Forças de segurança",
    start: "08/04/2026",
    end: "08/07/2026",
    exame: "08/12/2026",
    avaliableSpace: "340",
    isOpen: false,
    etap: [
      "Prova de conhecimento",
      "Testes psicotécnicos",
      "Exame médico"
    ]

  },
  {
    id: 2,
    course: "FAP - Força Aérea Portuguesa",
    category: "Forças armadas",
    start: "05/04/2026",
    end: "04/07/2026",
    exame: "08/12/2026",
    avaliableSpace: "50",
    isOpen: false,
    etap: [
      "Prova de matemática",
      "Testes psicotécnicos",
      "Exame médico"
    ]

  },
  {
    id: 3,
    course: "Marinha",
    category: "Forças armadas",
    start: "01/09/2024",
    end: "01/11/2024",
    exame: "08/12/2026",
    avaliableSpace: "250",
    isOpen: true,
    etap: [
      "Prova de natação",
      "Testes psicotécnicos",
      "Exame médico"
    ]

  }
]

export const courses = [
  {
    id: 1,
    name: "Forças de segurança",
    example: "GNR, PSP, PJ",
    category: "concurso público",
    description: "Preparação completa para concursos das principais forças de segurança.",
    descriptionLong: "Este curso foi desenvolvido para preparar candidatos a concursos das forças de segurança portuguesas, como GNR, PSP e PJ. Inclui matérias teóricas, práticas de provas físicas e simulações de exames escritos. O aluno terá acompanhamento contínuo para aumentar as hipóteses de sucesso.",
    duration: "8 meses",
    method: "Híbrido",
    image: security,
    advantages: [
      "Preparação específica para exames escritos e provas físicas",
      "Material atualizado conforme concursos nacionais",
      "Aulas híbridas (presenciais e online)"
    ],
    careers: [
      "Guarda da GNR",
      "Agente da PSP",
      "Agente da Polícia Judiciária"
    ],
    program: [
      "Legislação portuguesa aplicável",
      "Direito Penal e Processual Penal",
      "Simulação de exames",
      "Treino físico orientado"
    ],
    certificate: "Certificado de conclusão reconhecido pelo setor"
  },
  {
    id: 2,
    name: "Forças armadas",
    example: "Fuzileiros, Marinha, Força Aérea",
    category: "concurso público",
    description: "Formação específica para ingresso nas Forças Armadas Portuguesas.",
    descriptionLong: "Curso direcionado para candidatos que desejam ingressar em diferentes ramos das Forças Armadas. Trabalha tanto os conteúdos teóricos como a preparação física necessária para as provas. Inclui apoio personalizado para entrevistas e simulação de testes psicotécnicos.",
    duration: "6 meses",
    method: "Híbrido",
    image: army,
    advantages: [
      "Preparação física personalizada",
      "Simulação de provas de seleção",
      "Acompanhamento individual"
    ],
    careers: [
      "Fuzileiro",
      "Soldado da Força Aérea",
      "Marinheiro da Marinha"
    ],
    program: [
      "História militar e valores institucionais",
      "Treino físico",
      "Técnicas de sobrevivência",
      "Provas psicotécnicas"
    ],
    certificate: "Certificação interna de preparação para concurso"
  },
  {
    id: 3,
    name: "Proteção Civil",
    example: "Bombeiro, segurança",
    category: "segurança pública",
    description: "Formação técnica para profissões de emergência e proteção civil.",
    descriptionLong: "Curso completo para quem pretende trabalhar em áreas de emergência, como bombeiros e proteção civil. Foca em técnicas de socorro, prevenção e gestão de crises, bem como legislação de segurança pública.",
    duration: "7 meses",
    method: "Híbrido",
    image: bombeiro,
    advantages: [
      "Formação prática em simulações de emergência",
      "Acesso a conteúdos atualizados",
      "Certificação reconhecida"
    ],
    careers: [
      "Bombeiro voluntário ou profissional",
      "Agente de proteção civil",
      "Técnico de segurança"
    ],
    program: [
      "Primeiros socorros",
      "Gestão de crises",
      "Segurança contra incêndios",
      "Procedimentos de evacuação"
    ],
    certificate: "Certificação válida para o setor de segurança pública"
  },
  {
    id: 4,
    name: "Saúde e Cuidados",
    example: "Auxiliar de saúde",
    category: "saúde",
    description: "Formação para auxiliares de saúde e cuidadores.",
    descriptionLong: "Este curso prepara profissionais para atuarem em hospitais, clínicas e lares, prestando apoio direto a pacientes e equipas de saúde. Inclui teoria e prática supervisionada.",
    duration: "8 meses",
    method: "Híbrido",
    image: auxiliarSaude,
    advantages: [
      "Aulas práticas em ambiente simulado",
      "Certificação reconhecida",
      "Oportunidades de estágio"
    ],
    careers: [
      "Auxiliar de saúde",
      "Cuidador de idosos",
      "Assistente em clínicas privadas"
    ],
    program: [
      "Anatomia e fisiologia básica",
      "Cuidados de higiene e conforto",
      "Administração de medicamentos (apoio)",
      "Atendimento ao paciente"
    ],
    certificate: "Certificado de auxiliar de saúde"
  },
  {
    id: 5,
    name: "Administração de Empresas",
    example: "Gestor empresarial",
    category: "gestão",
    description: "Formação em gestão empresarial e administração de recursos humanos.",
    descriptionLong: "Curso voltado para futuros gestores e administradores, abordando técnicas de liderança, finanças, marketing e gestão de pessoas. O aluno terá uma visão global do funcionamento de uma empresa, aprendendo a tomar decisões estratégicas e eficazes.",
    duration: "5 meses",
    method: "Online",
    image: frontend,
    advantages: [
      "Conteúdo atualizado de acordo com o mercado",
      "Formação prática em casos reais de gestão",
      "Flexibilidade para estudo online"
    ],
    careers: [
      "Gestor de empresas",
      "Administrador de recursos humanos",
      "Consultor empresarial"
    ],
    program: [
      "Fundamentos de gestão empresarial",
      "Gestão de recursos humanos",
      "Marketing e estratégia",
      "Finanças e contabilidade"
    ],
    certificate: "Certificado de Administração e Gestão Empresarial"
  },
  {
    id: 6,
    name: "Redes Informáticas",
    example: "Técnico de sistemas e redes",
    category: "informática",
    description: "Especialização em redes de computadores e sistemas informáticos.",
    descriptionLong: "Curso técnico especializado em redes e sistemas informáticos. O aluno aprende a instalar, configurar e manter redes, além de dominar conceitos de segurança digital e administração de servidores.",
    duration: "5 meses",
    method: "Híbrido",
    image: redes,
    advantages: [
      "Formação prática em laboratórios de redes",
      "Certificação em tecnologias de mercado",
      "Preparação para certificações internacionais"
    ],
    careers: [
      "Técnico de redes informáticas",
      "Administrador de sistemas",
      "Especialista em segurança de redes"
    ],
    program: [
      "Fundamentos de redes",
      "Configuração de servidores",
      "Segurança informática",
      "Virtualização e cloud computing"
    ],
    certificate: "Certificado de Técnico de Redes Informáticas"
  },
  {
    id: 7,
    name: "Energia Renovável",
    example: "Técnico de painéis solares",
    category: "energia renovável",
    description: "Especialização em energias renováveis.",
    descriptionLong: "Curso focado em soluções sustentáveis para o setor energético, com destaque para a energia solar. O aluno aprende sobre instalação, manutenção e dimensionamento de sistemas de energias renováveis.",
    duration: "6 meses",
    method: "Híbrido",
    image: energiaRenovavel,
    advantages: [
      "Alta empregabilidade no setor energético",
      "Aulas práticas de instalação de painéis solares",
      "Conteúdo atualizado em tecnologias verdes"
    ],
    careers: [
      "Técnico instalador de sistemas solares",
      "Consultor em energias renováveis",
      "Manutenção de sistemas sustentáveis"
    ],
    program: [
      "Fundamentos das energias renováveis",
      "Sistemas solares fotovoltaicos",
      "Dimensionamento de projetos",
      "Manutenção preventiva e corretiva"
    ],
    certificate: "Certificação em Energias Renováveis"
  },
  {
    id: 8,
    name: "Manutenção de Sistema Solar",
    example: "Técnico de painéis solares",
    category: "energia renovável",
    description: "Especialização em instalação e manutenção de painéis solares.",
    descriptionLong: "Curso prático e técnico voltado para profissionais que desejam atuar na instalação e manutenção de sistemas solares fotovoltaicos. Inclui estudos de eficiência energética e otimização de sistemas.",
    duration: "5 meses",
    method: "Híbrido",
    image: painelSolar,
    advantages: [
      "Formação prática em campo",
      "Alta demanda de mercado",
      "Aprendizagem de técnicas modernas"
    ],
    careers: [
      "Instalador de sistemas solares",
      "Técnico de manutenção de painéis solares",
      "Consultor de eficiência energética"
    ],
    program: [
      "Instalação de painéis solares",
      "Manutenção de sistemas solares",
      "Eficiência energética",
      "Normas de segurança em instalações"
    ],
    certificate: "Certificação em Instalação e Manutenção de Sistemas Solares"
  },
  {
    id: 9,
    name: "Mecânica Automóvel",
    example: "Mecânico de automóveis ligeiros",
    category: "mecânica",
    description: "Formação técnica em mecânica automóvel e diagnóstico eletrónico.",
    descriptionLong: "Curso prático em mecânica de automóveis, com foco em manutenção preventiva, reparos e diagnóstico eletrónico. O aluno terá acesso a oficinas simuladas e equipamentos modernos.",
    duration: "5 meses",
    method: "Híbrido",
    image: mecanicoLigeiro,
    advantages: [
      "Aulas práticas em oficina equipada",
      "Aprendizagem de diagnóstico eletrónico",
      "Certificação reconhecida no setor automóvel"
    ],
    careers: [
      "Mecânico de automóveis ligeiros",
      "Técnico de diagnóstico eletrónico",
      "Manutenção automóvel em oficinas e concessionárias"
    ],
    program: [
      "Fundamentos de mecânica automóvel",
      "Sistemas de motor",
      "Sistemas elétricos e eletrónicos",
      "Diagnóstico e reparação"
    ],
    certificate: "Certificado de Técnico em Mecânica Automóvel"
  },
  {
    id: 10,
    name: "Mecânica de Pesados",
    example: "Mecânico de veículos pesados",
    category: "mecânica",
    description: "Formação técnica em mecânica de pesados e diagnóstico eletrónico.",
    descriptionLong: "Curso especializado em manutenção e reparação de veículos pesados, incluindo sistemas de motor, travagem, suspensão e eletrónica avançada.",
    duration: "5 meses",
    method: "Híbrido",
    image: mecanicoPesado,
    advantages: [
      "Aulas práticas em oficinas de pesados",
      "Aprendizagem de sistemas complexos",
      "Alta empregabilidade no setor de transportes"
    ],
    careers: [
      "Mecânico de veículos pesados",
      "Técnico de manutenção de frotas",
      "Especialista em diagnóstico eletrónico"
    ],
    program: [
      "Sistemas de motores a diesel",
      "Sistemas hidráulicos e pneumáticos",
      "Sistemas eletrónicos avançados",
      "Diagnóstico de avarias"
    ],
    certificate: "Certificado de Técnico em Mecânica de Pesados"
  },
  {
    id: 11,
    name: "Programador Frontend",
    example: "Frontend Developer",
    category: "informática",
    description: "Desenvolvimento de páginas web modernas com as mais recentes tecnologias.",
    descriptionLong: "Curso prático de desenvolvimento frontend, ensinando desde HTML, CSS e JavaScript até frameworks modernos como React. O aluno será capaz de criar interfaces web responsivas e interativas.",
    duration: "5 meses",
    method: "Online",
    image: frontend,
    advantages: [
      "Formação prática em projetos reais",
      "Acesso a tecnologias modernas (React, Tailwind)",
      "Alta procura no mercado de trabalho"
    ],
    careers: [
      "Frontend Developer",
      "Web Designer",
      "UI/UX Developer"
    ],
    program: [
      "HTML, CSS e JavaScript",
      "Responsive Design",
      "React e bibliotecas modernas",
      "Boas práticas de UI/UX"
    ],
    certificate: "Certificação em Desenvolvimento Frontend"
  },
  {
    id: 12,
    name: "Programador Backend",
    example: "Backend Developer",
    category: "informática",
    description: "Desenvolvimento web moderno com as mais recentes tecnologias.",
    descriptionLong: "Curso completo para formação em desenvolvimento backend, abordando Node.js, bases de dados relacionais e não relacionais, APIs e autenticação. O aluno aprenderá a estruturar aplicações escaláveis e seguras.",
    duration: "5 meses",
    method: "Online",
    image: backend,
    advantages: [
      "Formação prática em APIs reais",
      "Domínio de bases de dados SQL e NoSQL",
      "Preparação para o mercado de trabalho"
    ],
    careers: [
      "Backend Developer",
      "Fullstack Developer (complementar ao frontend)",
      "Técnico de sistemas web"
    ],
    program: [
      "Fundamentos de backend com Node.js",
      "Bases de dados SQL e NoSQL",
      "Criação de APIs REST",
      "Autenticação e segurança"
    ],
    certificate: "Certificação em Desenvolvimento Backend"
  }

]


