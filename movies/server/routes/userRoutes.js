
var router = require("express").Router();

const {
    getAllusers,
    addUser,
    getOne,
    updateUser,
    deleteUser
  }= require("../controller/userCont.js")
router.get("/",getAllusers)
router.post("/register",addUser)
router.get("/:name",getOne)
router.patch("update/:iduser",updateUser)
router.delete("delete/:iduser",deleteUser)

module.exports= router