
import { BiHome, BiInfoCircle, BiPhone, BiMedal, BiBullseye, BiWorld, BiCheckCircle } from 'react-icons/bi'
import { MdOutlineSchool, MdAutoGraph } from 'react-icons/md'
import { courseImg } from '../assets/img/course'
import { svg } from '../assets/img/method/index'



/* Não posso fechar os icones como tag porque js não aceita. tenho que fechar na hora de usar */

// link do menu principal
export const links = [

  { icon: BiHome , name: "Home", path: "/" },
  { icon: MdOutlineSchool , name: "Curso", path: "/cursos" },
  { icon: MdAutoGraph , name: "Metodologia", path: "/metodologia" },
  { icon: BiInfoCircle , name: "Sobre", path: "/sobre" },
  { icon: BiPhone , name: "Contacto", path: "/contacto" }
]

export const category = [
  {id: 1, icon: BiMedal, name:"Concursos Publicos"},
  {id: 2, icon: BiBullseye, name: "Preparação para Exames"},
  {id: 3, icon: BiWorld, name: "Línguas Estrangeiras"},
  {id: 4, icon: BiCheckCircle, name: "Formação Profissional"},
]

const [presencial, online, especialista] = svg

export const method = [
  {
    id: 1,
    title: "Aulas presenciais",
    description: "Encontros presenciais com acompanhamento próximo dos professores.",
    image: presencial
  },
  {
    id: 2,
    title: "Aulas online",
    description: "Aulas virtuais interativas e acessíveis de qualquer lugar.",
    image: online
  },
  {
    id: 3,
    title: "Tutoria personalizada",
    description: "Acompanhamento individual com tutores especializados para maximizar seu aprendizado.",
    image: especialista
  }
]

export const courses = [
  {
    id: 1,
    name: "Forças de segurança",
    example: "GNR, PSP, PJ",
    category: "concurso público",
    description: "preparação completa para concursos das principais forças de segurança.",
    duration: "8 meses",
    method: "Híbrido",
    image: courseImg.security
    
  },
  {
    id: 2,
    name: "Forças armadas",
    example: "fuzileiros, marinha, força aéria",
    category: "concurso público",
    description: "formação específica para ingresso nas Forças Armadas Portuguesas.",
    duration: "6 meses",
    method: "Híbrido",
    image: courseImg.army
  },
  {
    id: 3,
    name: "Proteção Civil",
    example: "Bombeiro, segurança",
    category: "segurança publica",
    description: "formação técnica para profissões de emergência e proteção civil.",
    duration: "7 meses",
    method: "Híbrido",
    image: courseImg.bombeiro
  },
  {
    id: 4,
    name: "Saúde e Cuidados",
    example: "auxiliar de saúde",
    category: "saúde",
    description: "formação para auxiliares de saúde e cuidadores",
    duration: "8 meses",
    method: "presencial + online",
    image: courseImg.auxiliarSaude
  },
  {
    id: 5,
    name: "Administração de Empresas",
    example: "gestor empresarial",
    category: "gestão",
    description: "formação em gestão empresarial e administração de recursos humanos.",
    duration: "5 meses",
    method: "online",
    image: courseImg.frontend
  },
  {
    id: 6,
    name: "Redes Informáticas",
    example: "técnico de sistema e redes",
    category: "informática",
    description: "Especialização em redes de computadores e sistemas informáticos.",
    duration: "5 meses",
    method: "híbrido",
    image: courseImg.redes
  },
  {
    id: 7,
    name: "Energia Renovável",
    example: "técnico de painéis solares",
    category: "energia renóvavel",
    description: "espacialização em energias renováveis",
    duration: "6 meses",
    method: "híbrido",
    image: courseImg.enegiaRenovavel
  },
  {
    id: 8,
    name: "Manutenção de Sistema Solar",
    example: "técnico de painéis solares",
    category: "energia renóvavel",
    description: "espacialização em instalação e manutenção de paineis soláres.",
    duration: "5 meses",
    method: "híbrido",
    image: courseImg.painelSolar
  },
  {
    id: 9,
    name: "Mecânica Automóvel",
    example: "mecânico de automóveis pesados",
    category: "mecânica",
    description: "Formação técnica em mecânica automóvel e diagnóstico eletrónico.",
    duration: "5 meses",
    method: "híbrido",
    image: courseImg.mecanicoLigeiro
  },
  {
    id: 10,
    name: "Mecânica de Pesados",
    example: "mecânico",
    category: "mecânica",
    description: "Formação técnica em mecânica de pesados e diagnóstico eletrónico.",
    duration: "5 meses",
    method: "híbrido",
    image: courseImg.mecanicoPesado
  },
  {
    id: 11,
    name: "Programador Frontend",
    example: "frontend developer",
    category: "informática",
    description: "Desenvolvimento de páginas web modernas com as mais recentes tecnologias.",
    duration: "5 meses",
    method: "online",
    image: courseImg.frontend
  },
  {
    id: 12,
    name: "Programador Backend",
    example: "Backend Developer",
    category: "informática",
    description: "Desenvolvimento web moderno com as mais recentes tecnologias.",
    duration: "5 meses",
    method: "online",
    image: courseImg.backend
  }
]


