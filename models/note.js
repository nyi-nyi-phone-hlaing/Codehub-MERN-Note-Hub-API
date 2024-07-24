//* Packages
const { model, Schema } = require("mongoose");

//* Creating Note Schema
const noteSchema = new Schema(
  {
    title: {
      type: String,
      minLength: 10,
      maxLength: 100,
      required: true,
    },
    content: {
      type: String,
      minLength: 5,
      required: true,
    },
    author: {
      type: String,
      default: "Anonymous",
    },
  },
  { timestamps: true }
);

module.exports = model("Note", noteSchema);
