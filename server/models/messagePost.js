const mongoose = require("mongoose");

const messagePosts = new mongoose.Schema(
  {
    name: {
      required: true,
      type: String,
    },
    email: {
      required: true,
      type: String,
      unique: true,
    },
    subject: {
      required: true,
      type: String,
    },
    message: {
      required: true,
      type: String,
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("Message", messagePosts);
