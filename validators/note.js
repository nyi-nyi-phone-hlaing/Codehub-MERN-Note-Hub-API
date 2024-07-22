const { body } = require("express-validator");

exports.noteTitleValidation = (title) => {
  return body(title)
    .trim()
    .notEmpty()
    .withMessage("Title is required.")
    .isLength({ min: 10 })
    .withMessage("Title is too short.")
    .isLength({ max: 50 })
    .withMessage("Title is too long.");
};

exports.noteContentValidation = (content) => {
  return body(content)
    .trim()
    .notEmpty()
    .withMessage("Content is required.")
    .isLength({ min: 5 })
    .withMessage("Content is too short.");
};
