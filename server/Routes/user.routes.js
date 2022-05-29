const express=require("express");
const { check } = require("../controllers/user.controller");




const router = express.Router();


router.post("/register",check)


module.exports = router;