const AboutPostSchema = require("../models/aboutPost.js");
const cloudinary = require("../utils/cloudinary.js");
const { redis } = require("../utils/redis.js");

const aboutPostCreate = async (req, res) => {
  try {
    const formData = req.body;
    const results = await cloudinary.uploader.upload(formData.image, {
      folder: "products",
    });
    const product = await AboutPostSchema.create({
      ...formData,
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

const getAboutPost = async (req, res) => {
  try {
    const getPosts = await AboutPostSchema.find();
    res.status(201).json(getPosts);
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: error.message });
  }
};
const updatePostAbout = async (req, res) => {
  try {
    const { email } = req.body;
    const updatePosts = await AboutPostSchema.findOneAndUpdate(
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

const deletePostAbout = async (req, res) => {
  try {
    const { id } = req.params;

    const deletePosts = await AboutPostSchema.findByIdAndDelete(id);

    res.status(200).json(deletePosts);
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: error.message });
  }
};

module.exports = {
  deletePostAbout,
  aboutPostCreate,
  getAboutPost,
  updatePostAbout,
};

//!REDIS
// const getAboutPost = async (req, res) => {
//   try {
//     const cached = await redis.get("post");
//     if (cached) {
//       return res.status(200).json(JSON.parse(cached));
//     }
//     const getPosts = await AboutPostSchema.find();

//     await redis.set("post", JSON.stringify(getPosts));

//     return res.status(200).json(getPosts);
//   } catch (error) {
//     console.log(error);
//     res.status(401).json({ message: error.message });
//   }
// };
