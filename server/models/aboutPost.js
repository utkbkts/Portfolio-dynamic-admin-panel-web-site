const mongoose = require("mongoose");

const AboutPostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
    },
    paragraph: {
      type: String,
      trim: true,
    },
    name: {
      type: String,
      trim: true,
    },
    birthday: {
      type: String,
      trim: true,
    },
    experience: {
      type: Number,
      trim: true,
    },
    phone: {
      type: String,
    },
    email: {
      type: String,
      trim: true,
    },
    educationLevel: {
      type: String,
      trim: true,
    },
    projectFinished: {
      type: Number,
      trim: true,
    },
    title: {
      type: String,
      trim: true,
    },
    freelance: {
      type: String,
      trim: true,
    },
    selectedFile: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("AboutPost", AboutPostSchema);
