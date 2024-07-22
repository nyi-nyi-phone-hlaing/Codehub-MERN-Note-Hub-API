const { model, Schema } = require("mongoose");

const noteSchema = new Schema(
  {
    title: {
      type: String,
      minLength: 10,
      maxLength: 50,
      required: true,
    },
    content: {
      type: String,
      minLength: 5,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model("Note", noteSchema);
