const asyncHandler = require("express-async-handler");
const { restart } = require("nodemon");
const Goal = require("../model/goalModel");

// @desc Get goals
// @route GET /api/goals
// @access Private

const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();
  res.status(200).json({ data: goals });
});

// @desc Create goals
// @route POST /api/goals
// @access Private

const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please fill the form");
  }

  const goal = await Goal.create({
    text: req.body.text,
  });
  res.status(201).json({ data: goal });
});

// @desc Update goals
// @route PUT /api/goals/:id
// @access Private

const updateGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json({ data: updatedGoal });
});

// @desc Delete goals
// @route DELETE /api/goals/:id
// @access Private

const deleteGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }
  await goal.remove();

  res.status(200).json({ _id: req.params.id });
});

// Export
module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};
