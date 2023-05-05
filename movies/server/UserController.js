// const express = require("express");
// const con =require('./mydatabase/index.js')
// const path = require('path');
// const app = express();
// const port = 5000;
// const cors =require ('cors');

// app.use(cors());
// app.use(express.json())
// app.use(express.static(path.join(__dirname, '..', 'public')));


// app.get("/",(req,res)=>{
//   res.send("welcome to my addiction space")
// });

// app.get("/api/users",(req,res)=>{
//     con.getAll((err,results)=>{
//         if(err) res.status(500).send(err)
//         else res.json(results)
//       })
//     })
// app.post("/api/users",(req,res)=>{
//     const user=req.body
//     console.log(user)
//     con.add(user,(err,results)=>{
//         if(err) res.status(500).send(err)
//         else res.status(201).send("user added")
//       })
//     })
// app.get("/api/users/:first_name",(req,res)=>{
//     const first_name=req.params.first_name
//     con.getOne(title,(err,results)=>{
//         if(err) res.status(500).send(err)
//         else res.json(results)
//       })
//     })
// app.patch("/api/users/:iduser",(req, res)=>{
//     const iduser=req.params.iduser
//     con.update(iduser,req.body,(err,results)=>{
//         if(err) res.status(500).send(err)
//         else res.status(200).send(results)
//       })
// })
// app.delete("/api/users/:iduser",(req,res)=>{
//     const iduser=req.params.iduser
//     con.delete(id,(err,results)=>{
//         if(err) res.status(500).send(err)
//         else res.status(204).send("user deleted")
//         })
// })



// app.listen(port, () => {
//     console.log(`Express app listening on port http://localhost:${port}`);
//   });