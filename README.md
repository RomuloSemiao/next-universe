# Next Universe 🌌

Aplicação web construída com **Next.js 15.3.3**, explorando Server Components, rotas dinâmicas, consumo de dados com cache desabilitado e boas práticas de arquitetura.

## 🚀 Tecnologias utilizadas

* [Next.js 15.3.3](https://nextjs.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [Tailwind CSS](https://tailwindcss.com/)

## 📁 Estrutura de Pastas

```
next-universe/
├── app/
│   ├── api/posts/[id]/route.ts  # Rota de API dinâmica para posts
│   ├── post/[id]/page.tsx       # Página dinâmica de post
│   └── page.tsx                 # Página principal
├── components/
│   └── PostContent.tsx          # Componente client-side de exibição de post
├── lib/
│   ├── data.ts                  # Simulação de banco de dados
│   └── interface.ts             # Tipagem de dados
├── public/
├── styles/
├── .env.local
├── .gitignore
├── next.config.js
├── package.json
└── README.md
```

## 📦 Instalação e uso local com npm

```bash
# Clone o repositório
$ git clone https://github.com/RomuloSemiao/next-universe.git

# Acesse a pasta do projeto
$ cd next-universe

# Instale as dependências com npm
$ npm install

# Crie o arquivo de variáveis de ambiente
$ cp .env.example .env.local

# Inicie o servidor de desenvolvimento
$ npm run dev

# Acesse: http://localhost:3000
```

## 🌐 Variáveis de ambiente

Crie um arquivo `.env.local` com o seguinte conteúdo:

```env
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

Na Vercel, adicione `NEXT_PUBLIC_BASE_URL` com a URL do seu domínio (ex: `https://next-universe.vercel.app`).

## 🥪 Funcionalidades principais

* Página inicial exibindo os posts.
* Página dinâmica de post via rota `/post/[id]`.
* API route que simula backend: `/api/posts/[id]`.
* Componente Client-side para renderizar detalhes do post.
* Server Components com `fetch` desabilitando cache (`no-store`).

## 🛠️ Em desenvolvimento

* Integração com banco de dados real
* CMS para gerenciamento de conteúdo
* Autenticação de usuários

## 🧑‍💻 Autor

Feito por [Rômulo Semião](https://github.com/RomuloSemiao)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
