const PortfolioSchema = require("../models/portfolioPost.js");
const cloudinary = require("../utils/cloudinary.js");
const { redis } = require("../utils/redis.js");

const createPortfolio = async (req, res) => {
  try {
    const formData = req.body;
    const results = await cloudinary.uploader.upload(formData.image, {
      folder: "products",
    });
    const product = await PortfolioSchema.create({
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

const getPortfolio = async (req, res) => {
  try {
    // MongoDB'deki verileri güncellediğinizde Upstash önbelleğini temizleyin
    await redis.del("portfolioPost");

    const cached = await redis.get("portfolioPost");
    if (cached) {
      return res.status(200).json(JSON.parse(cached));
    }
    const getPosts = await PortfolioSchema.find().sort({ updatedAt: -1 });

    await redis.set("portfolioPost", JSON.stringify(getPosts));

    return res.status(200).json(getPosts);
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: error.message });
  }
};

const updatePortfolio = async (req, res) => {
  try {
    const { id } = req.params;
    const updatePosts = await PortfolioSchema.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatePosts) {
      return res.status(404).json({ message: "Belge bulunamadı." });
    }
    res.status(200).json(updatePosts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Sunucu hatası." });
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
