const UserReviewModel = require("../models/UserReviewModel");

const createProductReview = async (req, res) => {
  const { rating, comment, userNick, userEmail } = req.body;
  try {
    const existingReview = await UserReviewModel.findOne({ userEmail });
    if (existingReview) {
      return res
        .status(400)
        .json({ message: "You have already reviewed this product." });
    }
    const commentReviews = await UserReviewModel.create({
      rating,
      userNick,
      userEmail,
      comment,
    });
    res.status(200).json(commentReviews);
  } catch (error) {
    console.log(error);
  }
};

const GetUser = async (req, res) => {
  try {
    const commentReviews = await UserReviewModel.find();
    res.status(200).json(commentReviews);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createProductReview,
  GetUser,
};
