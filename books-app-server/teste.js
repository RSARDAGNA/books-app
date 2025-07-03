const fs = require("fs");

const dadosAtuais = JSON.parse(fs.readFileSync("livros.json"));
const novoLivro = {id: '3', nome: 'Livro 3'};

//aqui ele pega tudo que tem no arquivo e bota mais o novoLivro.
fs.writeFileSync("livros.json", JSON.stringify([...dadosAtuais, novoLivro]));

console.log(JSON.parse(fs.readFileSync("livros.json")));

