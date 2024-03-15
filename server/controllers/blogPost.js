const blogPostSchema = require("../models/blogPost.js");
const cloudinary = require("../utils/cloudinary.js");
const { redis } = require("../utils/redis.js");

const BlogPostCreate = async (req, res) => {
  try {
    const formdata = req.body;
    const results = await cloudinary.uploader.upload(formdata.image, {
      folder: "products",
    });
    const product = await blogPostSchema.create({
      ...formdata,
      image: {
        public_id: results.public_id,
        url: results.secure_url,
      },
    });

    res.status(201).json(product);
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: error.message });
  }
};

const getBlogPost = async (req, res) => {
  try {
    // MongoDB'deki verileri güncellediğinizde Upstash önbelleğini temizleyin
    await redis.del("blogpost");

    const cached = await redis.get("blogpost");
    if (cached) {
      return res.status(200).json(JSON.parse(cached));
    }
    const getPosts = await blogPostSchema.find();

    await redis.set("blogpost", JSON.stringify(getPosts));

    return res.status(200).json(getPosts);
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: error.message });
  }
};

const deleteBlogPost = async (req, res) => {
  try {
    const { id } = req.params;

    const deletePosts = await blogPostSchema.findById(id);

    const imgId = deletePosts.image.public_id;
    await cloudinary.uploader.destroy(imgId);
    const resProduct = await blogPostSchema.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Deleted Successfully",
      data: resProduct,
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: error.message });
  }
};

const updatePostBlog = async (req, res) => {
  try {
    const { email } = req.body;
    const updatePosts = await blogPostSchema.findOneAndUpdate(
      { email: email },
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(updatePosts);
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: error.message });
  }
};

module.exports = {
  BlogPostCreate,
  updatePostBlog,
  deleteBlogPost,
  getBlogPost,
};
