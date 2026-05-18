const User = require("../models/User");


exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select(
      "-password"
    );

    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.followUser = async (req, res) => {
  try {
    const userToFollow = await User.findById(req.params.id);

    if (!userToFollow.followers.includes(req.user.id)) {
      userToFollow.followers.push(req.user.id);
    }

    await userToFollow.save();

    res.json({
      message: "User followed successfully",
    });
  } catch (err) {
    res.status(500).json(err);
  }
};