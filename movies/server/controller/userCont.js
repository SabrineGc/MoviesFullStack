const { where } = require("sequelize")
const {User} =require("../mydatabase/model/user.js")

const getAllusers = (req, res) => {
  User.findAll()
    .then(users => {
      console.log(users);  
      res.status(200).json(users);
    })
    .catch((error) => {
      console.error('Error fetching users:', error);
      res.status(500).send(error);
    });
};
 const register= (req,res)=>{
    const user=req.body
    console.log(user)
    User.create({
      name:req.body.name,
      email:req.body.email
    })
    .then((result)=>{res.status(201).send(result)})
    .catch((err)=>{
      console.log(err)
      res.status(409).send(err)})
    }

    const login= (req,res)=>{
      const user=req.body
      console.log(user)
      User.create({
        email:req.body.email
      })
      .then((result)=>{res.status(201).send(result)})
      .catch((err)=>{res.status(501).send(err)})
      }

 const getOne=(req,res)=>{
    const name=req.params.name
    User.findAll({where : {name:name}})
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
    }


 const updateUser=(req, res)=>{
    console.log(req.params.iduser)
    User.update(req.body,{where: {id:req.params.id}})
    .then((result) =>
      res.status(200).send(result)
      )
     .catch((error)=> 
     res.status(500).send(error)
     )
  }
  const deleteUser=(req,res)=>{
    const iduser=req.params.iduser
    User.destroy({where: {
      id: req.params.id
    }})
    .then((result) =>
      res.status(204).send(result)
      )
     .catch((error)=> 
     res.status(500).send(error)
     )

  }


  module.exports={
    getAllusers,
    register,
    getOne,
    login,
    updateUser,
    deleteUser
  }