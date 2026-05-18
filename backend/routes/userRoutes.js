const router = require("express").Router();

const auth = require("../middleware/authMiddleware");

const {
  getProfile,
  followUser,
} = require("../controllers/userController");


router.get("/profile", auth, getProfile);


router.put("/follow/:id", auth, followUser);

module.exports = router;