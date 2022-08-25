const mongoose = require("mongoose");

const goalSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId, //collection id
      required: true,
      ref: "User", //reference collection
    },
    text: {
      type: String,
      required: [true, "Please add a goal value"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Goal", goalSchema);
