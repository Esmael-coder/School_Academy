# MindUp - Plataforma de Cursos e Preparação para Exames

Uma plataforma educacional moderna desenvolvida com React e Vite, oferecendo cursos profissionalizantes e preparação para exames militares em Portugal.

## 📋 Sobre o Projeto

MindUp é uma aplicação web que ajuda estudantes a ganhar confiança, melhorar competências e enfrentar desafios profissionais através de:

- Cursos profissionalizantes em diversas áreas (TI, Mecânica, Saúde, Energia Renovável, etc.)
- Preparação para exames militares (Marinha, Exército, Força Aérea)
- Metodologia de ensino flexível (online, presencial e simulações)
- Portal do aluno com área privada
- Sistema de gestão de cursos por categorias

## ✨ Funcionalidades

- 🎓 **Catálogo de Cursos**: Navegação por cursos organizados por categorias
- 📝 **Preparação para Exames**: Informações sobre exames militares
- 📚 **Metodologia**: Apresentação do método de ensino (teoria, prática, simulações)
- 👤 **Portal do Aluno**: Área privada com autenticação
- 📞 **Contacto**: Formulário de contacto e informações
- 🍪 **Gestão de Cookies**: Modal de consentimento de cookies
- 📱 **Design Responsivo**: Interface adaptada para todos os dispositivos
- 🎨 **Animações**: Experiência visual melhorada com Motion

## 🚀 Tecnologias Utilizadas

- **React** 19.1.0 - Biblioteca JavaScript para construção de interfaces
- **Vite** 7.0.4 - Build tool e dev server rápido
- **React Router DOM** 7.8.1 - Roteamento da aplicação
- **Tailwind CSS** 4.1.12 - Framework CSS utility-first
- **Motion** 12.23.12 - Animações modernas
- **Swiper** 11.2.10 - Carrossel de testemunhos
- **Axios** 1.12.2 - Cliente HTTP para requisições
- **React Icons** 5.5.0 - Biblioteca de ícones

## 📦 Instalação

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou pnpm

### Passos

1. Clone o repositório:
\`\`\`bash
git clone https://github.com/seu-usuario/mindup.git
cd mindup
\`\`\`

2. Instale as dependências:
\`\`\`bash
npm install
# ou
pnpm install
\`\`\`

3. Inicie o servidor de desenvolvimento:
\`\`\`bash
npm run dev
# ou
pnpm dev
\`\`\`

4. Acesse a aplicação em `http://localhost:5173`

## 🏗️ Estrutura do Projeto

\`\`\`
client/
├── src/
│   ├── assets/          # Imagens e recursos estáticos
│   │   └── img/
│   │       ├── course/  # Imagens dos cursos
│   │       └── method/  # Ícones da metodologia
│   ├── components/      # Componentes reutilizáveis
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── CourseCard.jsx
│   │   ├── CookieModal.jsx
│   │   └── ...
│   ├── pages/           # Páginas da aplicação
│   │   ├── home/
│   │   ├── cursos/
│   │   ├── metodologia/
│   │   ├── exame/
│   │   ├── contacto/
│   │   ├── login/
│   │   ├── cadastro/
│   │   └── PortalAluno/
│   ├── const/           # Constantes e dados
│   │   └── Constants.js
│   ├── App.jsx          # Componente principal
│   └── main.jsx         # Ponto de entrada
├── public/              # Arquivos públicos
└── index.html           # Template HTML
\`\`\`

## 🎯 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Visualiza o build de produção localmente
- `npm run lint` - Executa o linter ESLint

## 📄 Páginas

- `/` - Página inicial
- `/cursos` - Catálogo de cursos
- `/cursos/:id` - Detalhes de um curso específico
- `/metodologia` - Metodologia de ensino
- `/exame` - Preparação para exames
- `/contacto` - Contacto e localização
- `/login` - Autenticação de usuários
- `/cadastro` - Registo de novos usuários
- `/portal-aluno` - Área privada do aluno (requer autenticação)
- `/politica-privacidade` - Política de privacidade
- `/politica-cookie` - Política de cookies
- `/aviso-legal` - Aviso legal

## 🔒 Autenticação

O projeto inclui sistema de autenticação com:
- Login de usuários
- Registo de novos usuários
- Rotas privadas (PrivateRoute)
- Portal do aluno protegido

## 🎨 Temas e Estilos

- Design moderno com Tailwind CSS 4
- Paleta de cores personalizada
- Componentes UI reutilizáveis (shadcn/ui)
- Animações suaves com Motion
- Carrossel de testemunhos com Swiper

## 📱 Responsividade

A aplicação é totalmente responsiva e otimizada para:
- Desktop (1920px+)
- Laptop (1024px+)
- Tablet (768px+)
- Mobile (320px+)

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## 📝 Licença

Este projeto é privado. Todos os direitos reservados.

## 📧 Contacto

Para mais informações, entre em contacto através da página de contacto da aplicação ou ligue para +351 21 573 496.

---

Desenvolvido com ❤️ pela equipa MindUp
