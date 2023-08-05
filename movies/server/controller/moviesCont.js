const movies =require('../mydatabase/model/movies.js')
module.exports = {
getAllMovies: function(req,res){
    movies.getAll((err,results)=>{
        if(err) res.status(500).send(err)
        else res.json(results)
      })
    },
addMovie: function(req,res){
    const movie=req.body
    console.log(movie)
    movies.add(movie,(err,results)=>{
        if(err) res.status(500).send(err)
        else res.status(201).send("movie added")
      })
    },
getOneByTitle: function (req,res){
    const title=req.params.title
    movies.getOne(title,(err,results)=>{
        if(err) res.status(500).send(err)
        else res.json(results)
      })
    },
updateMovie: function(req, res){
    const id=req.params.id
    movies.update(id,req.body,(err,results)=>{
        if(err) res.status(500).send(err)
        else res.status(200).send(results)
      })
},
deleteMovie: function (req,res){
    const id=req.params.id
    movies.delete(id,(err,results)=>{
        if(err) res.status(500).send(err)
        else res.status(204).send("movie deleted")
        })
}
}