const AboutPostSchema = require("../models/aboutPost.js");
const cloudinary = require("../utils/cloudinary.js");

const aboutPostCreate = async (req, res) => {
  try {
    const formdata = req.body;
    const results = await cloudinary.uploader.upload(formdata.image, {
      folder: "products",
    });
    const product = await AboutPostSchema.create({
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
