const express = require("express");
const {
  deleteBlogPost,
  BlogPostCreate,
  updatePostBlog,
  getBlogPost,
} = require("../controllers/blogPost.js");

const router = express.Router();

router.post("/createBlogPost", BlogPostCreate);
router.put("/updateBlogPost/:id", updatePostBlog);
router.delete("/deleteBlogPost/:id", deleteBlogPost);
router.get("/getBlogPost", getBlogPost);

module.exports = router;
