const Post = require("../models/Post");


exports.createPost = async (req, res) => {
  try {
    const post = await Post.create({
      user: req.user.id,
      caption: req.body.caption,
      image: req.body.image,
    });

    res.status(201).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
};


exports.getFeedPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("user", "username profilePic")
      .sort({ createdAt: -1 });

    res.json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.likePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post.likes.includes(req.user.id)) {
      post.likes.push(req.user.id);
    }

    await post.save();

    res.json(post);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.commentPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    post.comments.push({
      user: req.user.id,
      text: req.body.text,
    });

    await post.save();

    res.json(post);
  } catch (err) {
    res.status(500).json(err);
  }
};