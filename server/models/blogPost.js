const mongoose = require("mongoose");

const blogPostSchema = new mongoose.Schema(
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
    title: {
      required: true,
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("BlogPost", blogPostSchema);
