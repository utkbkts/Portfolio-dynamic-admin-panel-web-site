const express = require("express");
const MyUserControllers = require("../controllers/MyUserControllers");
const { jwtCheck } = require("../middleware/User.js");
const router = express.Router();

//api/user/
router.post("/", jwtCheck, MyUserControllers.CreateCurrentUser);

module.exports = router;
