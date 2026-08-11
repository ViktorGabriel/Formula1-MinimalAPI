# 🏎️ Formula1 Minimal API

[![TypeScript](https://img.shields.io/badge/TypeScript-5.4-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-%3E%3D20.0.0-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Fastify](https://img.shields.io/badge/Fastify-5.11-000000?style=for-the-badge&logo=fastify&logoColor=white)](https://fastify.dev/)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg?style=for-the-badge)](https://opensource.org/licenses/ISC)

> **Formula1 Minimal API** é uma API RESTful de alta performance desenvolvida em Node.js com TypeScript e Fastify. A aplicação fornece endpoints rápidos e leves para consulta de dados sobre equipes e pilotos do universo da Fórmula 1, integrando suporte a CORS e execução dinâmica via variáveis de ambiente.

---

## 🛠️ Tecnologias Utilizadas

- **[Node.js](https://nodejs.org/)** (v20+) - Ambiente de execução JavaScript do lado do servidor.
- **[TypeScript](https://www.typescriptlang.org/)** - Superset JavaScript com tipagem estática.
- **[Fastify](https://fastify.dev/)** - Framework web focado em alto desempenho e baixo overhead.
- **[@fastify/cors](https://github.com/fastify/fastify-cors)** - Plugin Fastify para habilitação de Cross-Origin Resource Sharing.
- **[tsx](https://github.com/privatenumber/tsx)** - Executor TypeScript moderno com suporte nativo a arquivos de ambiente.
- **[tsup](https://tsup.egoist.dev/)** - Empacotador (bundler) TypeScript super rápido alimentado por esbuild.

---

## 📋 Pré-requisitos

Antes de iniciar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- **[Git](https://git-scm.com/)**
- **[Node.js](https://nodejs.org/)** (versão 20.0.0 ou superior)
- Gerenciador de pacotes **[npm](https://www.npmjs.com/)** (incluso com Node.js), **yarn** ou **pnpm**

---

## 🚀 Instalação e Execução

### 1. Clonar o repositório

```bash
git clone https://github.com/ViktorGabriel/Formula1-MinimalAPI.git
cd Formula1-MinimalAPI
```

### 2. Instalar as dependências

```bash
npm install
```

### 3. Configurar variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto especificando a porta do servidor:

```env
PORT=3333
```

### 4. Executar a aplicação

Você pode rodar a aplicação em diferentes modos conforme necessário:

#### Modo de Desenvolvimento (Live Watch)
Recarrega o servidor automaticamente a cada alteração salva no código:
```bash
npm run start:watch
```

#### Modo de Desenvolvimento Simples
Inicia o servidor em modo de desenvolvimento:
```bash
npm run start:dev
```

#### Build e Produção
Gera a versão compilada em JavaScript no diretório `dist/` e executa:
```bash
npm run dist        # Compila os arquivos TypeScript para dist/
npm run start:dist  # Compila e roda o servidor em produção
```

O servidor estará rodando em: `http://localhost:3333`

---

## 📁 Estrutura do Projeto

```text
Formula1-MinimalAPI/
├── src/
│   └── server.ts          # Inicialização do servidor Fastify, rotas e dados de F1
├── .env                   # Configurações e variáveis de ambiente (não versionado)
├── .gitignore             # Arquivos e pastas ignorados pelo Git
├── package.json           # Dependências e scripts do projeto
├── package-lock.json      # Mapeamento exato de versões das dependências
├── tsconfig.json          # Configurações do compilador TypeScript
└── README.md              # Documentação oficial do projeto
```

---

## 📌 Uso e Endpoints da API

### Base URL: `http://localhost:3333`

### 🔍 Endpoints disponíveis

#### 1. Listar Equipes
Retorna a lista de todas as equipes de Fórmula 1 cadastradas.

- **URL:** `/teams`
- **Método:** `GET`
- **Exemplo com cURL:**
  ```bash
  curl -X GET http://localhost:3333/teams
  ```
- **Resposta Exemplo (200 OK):**
  ```json
  {
    "teams": [
      {
        "id": 1,
        "name": "Ferrari",
        "base": "Maranello, Italy"
      },
      {
        "id": 2,
        "name": "Red Bull Racing",
        "base": "Milton Keynes, United Kingdom"
      }
    ]
  }
  ```

---

#### 2. Listar Todos os Pilotos
Retorna a lista completa dos pilotos de Fórmula 1.

- **URL:** `/pilots`
- **Método:** `GET`
- **Exemplo com cURL:**
  ```bash
  curl -X GET http://localhost:3333/pilots
  ```
- **Resposta Exemplo (200 OK):**
  ```json
  {
    "pilots": [
      {
        "id": "1",
        "name": "Max Verstappen",
        "team": "Red Bull Racing"
      },
      {
        "id": "2",
        "name": "Lewis Hamilton",
        "team": "Mercedes"
      }
    ]
  }
  ```

---

#### 3. Buscar Piloto por ID
Retorna os detalhes de um piloto específico pelo seu ID numérico.

- **URL:** `/pilots/:id`
- **Método:** `GET`
- **Parâmetros de Rota:** `id` (ex: `1`)
- **Exemplo com cURL:**
  ```bash
  curl -X GET http://localhost:3333/pilots/1
  ```
- **Resposta Sucesso (200 OK):**
  ```json
  {
    "pilot": {
      "id": "1",
      "name": "Max Verstappen",
      "team": "Red Bull Racing"
    }
  }
  ```
- **Resposta Erro (404 Not Found):**
  ```text
  Piloto não encontrado!
  ```

---

## 🤝 Como Contribuir

Contribuições são super bem-vindas! Se você deseja melhorar a API, adicionar novas rotas ou refatorar o código, siga estes passos:

1. **Faça um Fork** deste repositório.
2. **Crie uma Branch** para sua feature/correção:
   ```bash
   git checkout -b feature/minha-nova-feature
   ```
3. **Faça o Commit** das suas alterações com mensagens claras:
   ```bash
   git commit -m "feat: adiciona nova funcionalidade"
   ```
4. **Envie as alterações** para a sua branch no GitHub:
   ```bash
   git push origin feature/minha-nova-feature
   ```
5. **Abra um Pull Request** detalhando as alterações propostas.

---

## 📄 Licença

Este projeto está sob a licença **ISC**. Veja o arquivo de licença para mais detalhes.

---

<p align="center">
  Desenvolvido com 🏎️ por <a href="https://github.com/ViktorGabriel">Viktor Gabriel</a>
</p>
