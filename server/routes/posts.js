const express = require("express");
const router = express.Router();
const { getPosts, createPost } = require("../controllers/posts");

router.get("/", getPosts);

module.exports = router;
