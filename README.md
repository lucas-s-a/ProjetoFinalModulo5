# Projeto Node.js CRUD

Projeto Final Módulo 5 Resilia - SENAC RJ (Programadores Cariocas)

## Site de compras de eletrônicos

O projeto consiste em um site que permite criar e armazenar usuários em um banco de dados. Esses usuários podem fazer pedidos de produtos que estão em um banco de dados importado para a aplicação. No site, o cliente pode ver o preço final e visualizar o histórico de seus pedidos. O banco gerencia e separa o pedido para o usuário que está acessando sem misturar.

O usuário deve fazer o cadastro para poder comprar, e ao estar logado, pode fazer o pedido, visualizar antes de finalizar a compra e concluir a compra salvando no banco de dados.

No trabalho foi utilizado a arquitetura MVC para melhor visualização e organização do código, também conta com a pasta de rotas e do banco separado, além de uma pasta para session quando o usuário estiver logado.

Entre as tecnologias usadas para criação do projeto, além do Node.js, estão:

1. MySQL 
2. Express
3. Sequelize
4. Handlebars
5. Express Session
6. Express Flash

## Como abrir

Para executar a aplicação, você deve primeiro clonar o repositório ou baixar e extrair em seu computador. Quando extraído, você terá um arquivo SQL que terá uma micro API que servirá para a utilização do projeto. Esse arquivo fica em uma pasta ao qual ele será importado para o MySQL. Pode deixar na própria pasta da aplicação desde que indique o diretório ao fazer a importação para o MySQL pelo XAMPP.

Após colocar o arquivo em uma pasta de sua preferência ou na própria pasta, abra o aplicativo XAMPP que fará a conexão do banco a aplicação. Ao abrir o XAMPP:

- Inicie o XAMPP
- Abra o shell e dê o comando cd (caminho da pasta do arquivo SQL)
- Inicie o MySQL com o comando `mysql -u root`
- Ao aparecer o Mariadb dê o comando `SOURCE apiprodt.sql` (pois é o nome do arquivo SQL da aplicação)

Após isso, abra a aplicação no Visual Studio Code, abra o terminal e dê o comando `npm install` no diretório da aplicação. Após instalar as dependências, dê o comando `npm start`. Ele criará as tabelas que faltarem caso não tenha e abrirá a aplicação.

## Considerações Finais
Este projeto foi desenvolvido pelos Programadores Cariocas como trabalho final do módulo 5 do curso da Resilia - SENAC RJ. Seu objetivo foi demonstrar a capacidade dos alunos em desenvolver um site de compras com banco de dados e cadastro de usuários.
