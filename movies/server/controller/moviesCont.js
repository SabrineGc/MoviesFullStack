const { where } = require("sequelize")
const {Movies} =require("../mydatabase/model/movies.js")


module.exports = {
getAllMovies: function(req,res){
    Movies.findAll()
    .then((result) => {
      console.log(result);  
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
    },
addMovie: function(req,res){
    const movie=req.body
    console.log(movie)
    Movies.create(movie)
    .then((result)=>{res.status(201).send(result)})
    .catch((err)=>{res.status(409).send(err)})
    },
getOneByTitle: function (req,res){
    Movies.findAll({where: {title: req.params.title}})
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
    },
updateMovie: function(req, res){
    const id=req.params.id
    Movies.update(req.body, {where : {id:req.params.id}})
    .then((result) =>
      res.status(200).send(result)
      )
     .catch((error)=> 
     res.status(500).send(error)
     )
},
deleteMovie: function (req,res){
    const id=req.params.id
    Movies.destroy({where : {id:req.params.id}})
    .then((result) =>
      res.status(204).send(result)
      )
     .catch((error)=> 
     res.status(500).send(error)
     )

}
}