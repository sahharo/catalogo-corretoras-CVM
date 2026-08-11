# Corretoras CVM

Aplicação simples em Next.js + TypeScript para listar corretoras da CVM consumindo a API da Brasil API.

## Funcionalidades
- Listagem de corretoras em cards
- Busca por CNPJ, nome comercial ou razão social
- Tela de detalhes ao clicar em uma corretora
- Interface em tons de rosa, com foco em simplicidade e boa experiência

## Tecnologias
- Next.js
- React
- TypeScript
- Material UI
- Jotai
- Axios

## Como rodar
1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o projeto:
   ```bash
   npm run dev
   ```
3. Acesse no navegador:
   ```text
   http://localhost:3000
   ```

## Observação
A API externa pode demorar um pouco para responder na primeira carga, então a tela exibe um estado de carregamento enquanto isso acontece.
