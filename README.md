===============================================================================================================================================

                                                  TESTE PRÁTICO

===============================================================================================================================================

Database

utf8mb4_0900_ai_ci
utf8mb4

Utilizando banco de dados MySQL, crie tabelas para armazenar cadastros de clientes e seus respectivos usuários.
- Adicionar o script (.sql) no repositório do projeto de back-end.

Estrutura das tabelas:

`clientes`:
- id
- cnpj
- nome_fantasia
- razao_social
- cep
- endereco
- numero
- complemento
- bairro
- cidade
- uf

`usuarios`:
- id
- cliente_id
- nome
- sobrenome
- telefone
- email
- senha

===============================================================================================================================================

Back-end

Utilizando NodeJS, implemente uma API Rest para salvar os cadastros dos clientes e usuários:

Pontos a serem avaliados:
- TypeScript
- Livre escolha de bibliotecas de terceiros
- Legibilidade e organização do código-fonte
- Validações de dados
- Tratamentos de exceções

Desejáveis:
  - NestJS
  - Typeorm

===============================================================================================================================================

Front-end

Utilizando React, implemente uma Single-Page Application que contemple as seguintes funcionalidades:

- Lista de usuários com botão Adicionar que abre um cadastro de usuários;
- Cadastro de usuário e cliente deverá ser um formulário em formato de multi-steps, onde:
- Step 1 deverá pedir os dados do cliente (cnpj, nome fantasia, razao social, cep, endereco, numero, complemento, bairro, cidade, uf);
- Step 2 deverá pedir os dados do usuário (nome, sobrenome, telefone, email, senha).

Pontos a serem avaliados:
- TypeScript
- Livre escolha de bibliotecas de terceiros
- Legibilidade e organização do código-fonte
- Tratamentos de exceções
- Máscaras em campos de inputs de dados

Desejáveis:
  - Design das telas
  - Utilizar algum gerenciador de estado como context Api, redux etc...
  - cd 
  - Material UI

===============================================================================================================================================

O Teste será válido até o período 18/08/2023

Ao término do teste, fazer upload dos projetos no Bitbucket ou Github e nos informar os links para que possamos acessá-los.

===============================================================================================================================================
# CadastroBackend
