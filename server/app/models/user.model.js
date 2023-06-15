const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
    },
    gender: {
      type: String,
      enum: ["male", "female"],
    },
    birthday: {
      type: Date,
      required: true,
    },
    remember: {
      type: Boolean,
      default: false,
    },
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role",
      },
    ],
  })
);

module.exports = User;