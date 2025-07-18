const fs = require("fs")

function getTodosLivros(){
  return JSON.parse(fs.readFileSync("livros.json"));
}

function getLivroPorId(id) {
  const livros = JSON.parse(fs.readFileSync("livros.json"));
  const livroFiltrado = livros.filter( livro => livro.id === id)[0];
  return livroFiltrado;
}

function insereLivro(novoLivro){
  const livrosAtuais = JSON.parse(fs.readFileSync("livros.json"));
  const novaListaDeLivros = [...livrosAtuais, novoLivro];
  fs.writeFileSync("livros.json", JSON.stringify(novaListaDeLivros));
}

function modificaLivro(modificacoes, id){
  let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"));
  const indiceModificado = livrosAtuais.findIndex((livro) => livro.id == id);
  const consteudoMudado = { ...livrosAtuais[indiceModificado], ...modificacoes };//modificacoes vai substituir o nome
  //ex: livrosAtuais[indiceModificado] = {"id":"4","nome":"Livro 4"}
  //modificacoes = {"nome":"Livro 4.1"}

  livrosAtuais[indiceModificado] = consteudoMudado;
  fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais));
}

function deletaLivroPorID(id) {
  let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"));
  livrosAtualizados = livrosAtuais.filter((livro) => livro.id !== id);
  fs.writeFileSync("livros.json", JSON.stringify(livrosAtualizados));
}

module.exports = {
  getTodosLivros,
  getLivroPorId,
  insereLivro,
  modificaLivro,
  deletaLivroPorID
};