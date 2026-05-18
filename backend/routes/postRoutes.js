const router = require("express").Router();
const Post = require("../models/Post");
const auth = require("../middleware/authMiddleware");


router.post("/create", auth, async (req, res) => {
  try {
    const post = new Post({
      user: req.user.id,
      caption: req.body.caption,
      image: req.body.image,
    });

    await post.save();

    res.status(201).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/feed", async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("user", "username profilePic")
      .sort({ createdAt: -1 });

    res.json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.put("/like/:id", auth, async (req, res) => {
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
});

module.exports = router;