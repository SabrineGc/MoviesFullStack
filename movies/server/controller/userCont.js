const users =require("../mydatabase/model/user.js")

const getAllusers=(req,res)=>{
    users.getAllusers((err,results)=>{
        if(err) res.status(500).send(err)
        else res.json(results)
      })
    }
 const addUser= (req,res)=>{
    const user=req.body
    console.log(user)
    users.adduser(user,(err,results)=>{
        if(err) res.status(500).send(err)
        else res.status(201).send("user added",results)
      })
    }
 const getOne=(req,res)=>{
    const name=req.params.name
    users.getOneUser(name,(err,results)=>{
        if(err) res.status(500).send(err)
        else res.json(results)
      })
    }
 const updateUser=(req, res)=>{
    const iduser=req.params.iduser
    users.updateUser(iduser,req.body,(err,results)=>{
        if(err) res.status(500).send(err)
        else res.status(200).send(results)
      })
  }
  const deleteUser=(req,res)=>{
    const iduser=req.params.iduser
    users.deleteUser(id,(err,results)=>{
        if(err) res.status(500).send(err)
        else res.status(204).send("user deleted")
        })
  }


  module.exports={
    getAllusers,
    addUser,
    getOne,
    updateUser,
    deleteUser
  }