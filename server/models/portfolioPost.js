const mongoose = require("mongoose");

const portfolioPost = new mongoose.Schema(
  {
    image: {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
    category: [{ type: String }],
    link: {
      required: true,
      type: String,
    },
    title: {
      required: true,
      type: String,
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("Portfolio", portfolioPost);
