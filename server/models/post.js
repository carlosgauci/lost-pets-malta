const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  name: String,
  breed: String,
  lastSeen: String,
  contact: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
