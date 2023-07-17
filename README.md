# Desafio Software Engineer, Back-end - Pagar.me

Resolução do desafio [Back-end Pagar.me](https://github.com/pagarme/vagas/tree/master/desafios/software-engineer-backend) para implementação de um Payment Service Provider (PSP).


## Tecnologias utilizadas

* **express** para desenvolvimento da API;
* **mongoose** para conexão com banco de dados MongoDB;
* **dotenv** para leitura de variáveis de ambiente;
* **eslint** para manter um padrão de formatação do código;
* **nodemon** para hot reload de ambiente de desenvolvimento.

## Como executar o projeto

Execute o comando `npm install` para instalar as dependências.

Crie um arquivo chamado `.env` na raiz do projeto com o seguinte conteúdo substituindo a `DB_CONNECTION_STRING` por um endereço válido:

```
DB_CONNECTION_STRING=string de conexão com o MongoDB
PORT=3000
```

Na pasta raiz do projeto execute o comando `npm run dev`. A API estará disponível no endereço `http://localhost:3000`.
