
var router = require("express").Router();

const {
    getAllusers,
    register,
    getOne,
    login,
    updateUser,
    deleteUser
  }= require("../controller/userCont.js")
router.get("/",getAllusers)
router.post("/register",register)
router.post("/login",login)
router.get("/:name",getOne)
router.patch("/update/:id",updateUser)
router.delete("/delete/:id",deleteUser)

module.exports= router