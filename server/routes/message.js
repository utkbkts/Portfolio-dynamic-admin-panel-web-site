const express = require("express");
const { MessageCreatePost } = require("../controllers/messageCreate");

const router = express.Router();

router.post("/message", MessageCreatePost);

module.exports = router;
