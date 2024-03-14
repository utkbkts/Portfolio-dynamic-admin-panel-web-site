const express = require("express");
const {
  aboutPostCreate,
  getAboutPost,
  updatePostAbout,
} = require("../controllers/aboutPost.js");

const router = express.Router();

router.post("/createAboutPost", aboutPostCreate);
router.put("/updateAboutPost", updatePostAbout);
router.get("/getAboutPost", getAboutPost);

module.exports = router;
