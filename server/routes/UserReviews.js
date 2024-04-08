const express = require("express");
const router = express.Router();
const {
  createProductReview,
  GetUser,
} = require("../controllers/ReviewsPost.js");

router.post("/reviews", createProductReview);
router.get("/reviews", GetUser);

module.exports = router;
