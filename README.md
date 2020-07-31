## Diario de DEV
App backend em reactjs para upload de imagens local ou remoto.

## Pré-requisitos: 
- Conta de usuario do IAM da AWS, com suas credenciais e chaves de acesso.
- Bucket criado no S3 da AWS 

## Cliente para testes requisições http:
- Insomnia
- Postman

## Libs e ferramentas utilizadas:
`express` - Framework web escrito em JavaScript que roda sobre o ambiente node.js.

`morgan` -  Middleware ou Logger personalizável que permite fazer logs de solicitações HTTP.

`mongoose` - Módulo do NodeJS que fornece mapeamento de objetos do MongoDB ORM(Object Relational Mapping). 

`multer` - O Multer é um middleware node.js para lidar com dados de várias multipart/form-data, usado principalmente para o upload de arquivos.

`dotenv` - A lib dotenv permite o uso de variaveis de ambiente na app

`nodemon`  - Realiza o redeploy da aplicação apos alteração de algum arquivo instalado com opção
 ex: `yarn nodemon -D` (usado somente durante o desenvolvimento)

`styled-components` - Permite escrever código CSS real para estilizar componentes node.JS. 

`yarn add multer-s3` - Realiza o storage no AWS da amazon em de fazer no disk da maquina local.

`yarn add aws-sdk` - SDK de integração do node com o S3 da amazon


## Criando projeto (package.json)
Na pasta do projeto (backend) executar o comando:
`yarn init -y` 

## Controle de versao
`git init` - criando arquivo de controle do git para o projeto
Não subir file .env para o github
Criado os arquivos: 
.gitignore
.env_example (copia do .env sem os dados) - subir esse file para o github 

Conteudo do file .gitignore:
~~~
node_modules
.env
tmp/uploads/*
!tmp/uploads/.gitkeep
~~~

## Uso de variaveis de ambiente
Clocar o codigo abaixo no arquivo principal App.js ou index.js da aplicação:
~~~
require('dotenv').config();
~~~ 

## Configuração de produção
- Criação do Procfile: Arquivo do heroku para executar a aplicação após deplyy
Conteúdo:
~~~
web: yarn start
~~~
- Alteração da porta de conexão do servidor no file index.js (principal da app)
incluir "PORT" variavel dinamica controlada pelo heroku que informara a porte 
de execução da app em produção automaticamente apos subir a app.
~~~
app.listen(process.env.PORT || 3000) // server vai houvir a porta 3000
~~~
# Referências
Rocketseat: https://www.youtube.com/channel/UCSfwM5u0Kce6Cce8_S72olg
Vídeo do front-end com ReactJS: https://youtu.be/G5UZmvkLWSQ
Vídeo do back-end com NodeJS: https://youtu.be/MkkbUfcZUZM
Video do deploy : https://youtu.be/MkkbUfcZUZM
