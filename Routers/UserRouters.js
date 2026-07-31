const express =require("express");
const router=express.Router();
const {signupUser}=require("../Controllers/UserControllers");


router.post("/signup",signupUser);

module.exports = router;