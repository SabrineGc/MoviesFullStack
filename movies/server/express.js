const express = require("express");
const con =require('./mydatabase/index.js')
const path = require('path');
const app = express();
const port = 5000;
const cors =require ('cors');

app.use(cors());
app.use(express.json())
app.use(express.static(path.join(__dirname, '..', 'public')));


app.get("/",(req,res)=>{
  res.send("welcome to my addiction space")
});

app.get("/api/movies",(req,res)=>{
    con.getAll((err,results)=>{
        if(err) res.status(500).send(err)
        else res.json(results)
      })
    })
app.post("/api/movies",(req,res)=>{
    const movie=req.body
    console.log(movie)
    con.add(movie,(err,results)=>{
        if(err) res.status(500).send(err)
        else res.status(201).send("movie added")
      })
    })
app.get("/api/movies/:title",(req,res)=>{
    const title=req.params.title
    con.getOne(title,(err,results)=>{
        if(err) res.status(500).send(err)
        else res.json(results)
      })
    })
app.patch("/api/movies/:id",(req, res)=>{
    const id=req.params.id
    con.update(id,req.body,(err,results)=>{
        if(err) res.status(500).send(err)
        else res.status(200).send(results)
      })
})
app.delete("/api/movies/:id",(req,res)=>{
    const id=req.params.id
    con.delete(id,(err,results)=>{
        if(err) res.status(500).send(err)
        else res.status(204).send("movie deleted")
        })
})
app.get("/api/users",(req,res)=>{
  con.getAllusers((err,results)=>{
      if(err) res.status(500).send(err)
      else res.json(results)
    })
  })
app.post("/api/users",(req,res)=>{
  const user=req.body
  console.log(user)
  con.adduser(user,(err,results)=>{
      if(err) res.status(500).send(err)
      else res.status(201).send("user added")
    })
  })
app.get("/api/users/:first_name",(req,res)=>{
  const first_name=req.params.first_name
  con.getOneUser(first_name,(err,results)=>{
      if(err) res.status(500).send(err)
      else res.json(results)
    })
  })
app.patch("/api/users/:iduser",(req, res)=>{
  const iduser=req.params.iduser
  con.updateUser(iduser,req.body,(err,results)=>{
      if(err) res.status(500).send(err)
      else res.status(200).send(results)
    })
})
app.delete("/api/users/:iduser",(req,res)=>{
  const iduser=req.params.iduser
  con.deleteUser(id,(err,results)=>{
      if(err) res.status(500).send(err)
      else res.status(204).send("user deleted")
      })
})



app.listen(port, () => {
    console.log(`Express app listening on port http://localhost:${port}`);
  });