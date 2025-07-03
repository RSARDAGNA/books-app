const { Router } = require("express");
const {getLivros, getLivro, postLivro, patchLivro, deleteLivro} = require("../controladores/livro");

const router = Router();

//Essa parte cria uma rota GET para o caminho '/' (raiz do site):
router.get("/", getLivros);

router.get("/:id", getLivro);

router.post("/", postLivro);

router.patch("/:id", patchLivro);

router.delete("/:id", deleteLivro);

module.exports = router;
