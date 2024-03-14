const PortfolioSchema = require("../models/portfolioPost.js");
const cloudinary = require("../utils/cloudinary.js");

const createPortfolio = async (req, res) => {
  try {
    const formdata = req.body;
    const results = await cloudinary.uploader.upload(formdata.image, {
      folder: "products",
    });
    const product = await PortfolioSchema.create({
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

const getPortfolio = async (req, res) => {
  try {
    const getPost = await PortfolioSchema.find();

    res.status(201).json(getPost);
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: error.message });
  }
};

const updatePortfolio = async (req, res) => {
  try {
    const { email } = req.body;
    const updatePosts = await PortfolioSchema.findOneAndUpdate(
      { email: email },
      req.body,
      {
        new: true,
      }
    );

    res.status(201).json(updatePosts);
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: error.message });
  }
};

const deletePortfolio = async (req, res) => {
  try {
    const { id } = req.params;

    const deletePosts = await PortfolioSchema.findById(id);

    const imgId = deletePosts.image.public_id;
    await cloudinary.uploader.destroy(imgId);
    const resProduct = await PortfolioSchema.findByIdAndDelete(id);

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

module.exports = {
  createPortfolio,
  getPortfolio,
  updatePortfolio,
  deletePortfolio,
};
