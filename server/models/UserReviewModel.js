const mongoose = require("mongoose");

const UserReview = new mongoose.Schema({
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  comment: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  userNick: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("UserReviews", UserReview);
