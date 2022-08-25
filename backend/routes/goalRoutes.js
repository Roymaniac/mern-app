const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
} = require("../controllers/goalController");

const { protected } = require("../middleware/authMiddleware");

router.route("/").get(protected, getGoals).post(protected, setGoals);

router.route("/:id").delete(protected, deleteGoals).put(protected, updateGoals);

module.exports = router;
