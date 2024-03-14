const messagePosts = require("../models/messagePost.js");

const MessageCreatePost = async (req, res) => {
  try {
    const MessagePost = await messagePosts.create(req.body);

    return res
      .status(200)
      .json({
        success: true,
        message: "Message successfully created",
        data: MessagePost,
      });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  MessageCreatePost,
};
