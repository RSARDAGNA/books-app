const { Router } = require("express");
const { getFavoritos, deleteFavorito, postFavorito } = require("../controladores/favoritos");

const router = Router();

//Essa parte cria uma rota GET para o caminho '/' (raiz do site):
router.get("/", getFavoritos);

router.post("/:id", postFavorito);

router.delete("/:id", deleteFavorito);

module.exports = router;
