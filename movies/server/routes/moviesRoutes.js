
var router = require("express").Router();

const movieCont= require("../controller/moviesCont.js")

router.get("/",movieCont.getAllMovies)
router.post("/add",movieCont.addMovie)
router.get("/:title",movieCont.getOneByTitle)
router.patch("/update/:id",movieCont.updateMovie)
router.delete("/delete/:id",movieCont.deleteMovie)

module.exports= router