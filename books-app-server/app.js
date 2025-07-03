const express = require('express');
const rotaLivro = require("./rotas/livro");
const rotaFavoritos = require("./rotas/favoritos");
const cors = require("cors");

const app = express();//instancia da aplicacao Express que sera usada para configurar rotas, middlewares, e iniciar o servidor.
app.use(express.json());//isso permite aceitar json como request no body
app.use(cors({origin: "*"}));// o * simboliza que todas as origens sao permitidas a usar a API

app.use("/livros", rotaLivro);
app.use("/favoritos", rotaFavoritos);

const port = 8000;

//`app.listen(port, ...)` faz com que o app comece a escutar requisicoes na porta `8000`.
//A funcao callback `() => { ... }` sera executada assim que o servidor comecar a escutar.
app.listen(port, () => {
  console.log(`Escutando a porta ${port}`);
})