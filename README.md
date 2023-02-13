# ProjetoFinalModulo5
Projeto em equipe demostrando conhecimentos em sql e javascript

# Site de compras de eletrônicos

No projeto consiste em um site que consegue criar e armazenar usuários no bando de dados.
Esse usuário poderá comprar
produtos que estão em um banco de dados que será importado para uso da aplicação. 
no site o cliente verá o preço final e poderá ver o histórico de seus pedidos , o banco gerencia e separa o pedido
para o usuário que está acessando sem misturar.

o Usuário ao entrar no site deve fazer o cadastro para poder comprar assim que fazer e se a senha for aceita e não existir outro usuário como o mesmo nickname o cadastro será aceito e ao estar logado poderá fazer o pedido, 
visualizar antes de finalizar a compra e concluir a compra salvando no banco de dados.

No trabalho foi ultilizado a arquitetura MVC para melhor visualização e organização do código ,também conta com a pasta de rotas
e do banco separado ,além de uma pasta para session quando o usuário estiver logado


Entre as tecnologias usadas para criação do projeto além do Nodejs estão:

 1. MySQL 
 2. Express
 3. Sequelize
 4. Handlebars
 5. Express Session
 6. Express Flash


Como abrir:

Para Executar a aplicação você deve primeiro dar git clone com o link do projeto ou baixar e extrair em seu computador.
quando extraído ,você terá um arquivo sql que terá uma micro API que servirá para ultilização do projeto
esse arquivo fica em uma pasta ao qual ele será importado para o mysql
pode deixar na própria pasta da aplicação desde que indique o diretório ao fazer a importação para o mysql pelo xampp.

após colocar o arquivo em uma pasta de sua prefêrencia ou na própria pasta
abra o aplicativo xampp que fará a conexão do banco a aplicação.
ao abrir o xampp:
Start o xampp
abra o shell e dê o comando cd (caminho da pasta do arquivo sql)
inicie o mysql com o comando > mysql -u root
ao aparecer o Mariadb dê o comando > SOURCE apiprodt.sql (pois é o nome do arquivo sql da aplicação)
após isso abrir a aplicação no VSCODE 
abrir o terminal e dar o comando npm install no diretório da aplicação
após instalar as depêndecias dar o comando npm start .
ele criára as tabelas que faltarem caso não tenha e abrirá a aplicação