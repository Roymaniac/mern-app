const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUser,
} = require("../controllers/userController");

const { protected } = require("../middleware/authMiddleware");

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/me").get(protected, getUser);

module.exports = router;
