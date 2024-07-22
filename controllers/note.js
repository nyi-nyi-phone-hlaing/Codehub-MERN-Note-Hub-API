const { validationResult } = require("express-validator");

//! Getting all Posts
exports.findAllNotes = (req, res, next) => {
  res.status(200).json({
    posts: [
      { id: 1, title: "First Post" },
      { id: 2, title: "Second Post" },
      { id: 3, title: "Third Post" },
      { id: 4, title: "Fouth Post" },
    ],
    message: "Happy Coding!",
    url: req.url,
  });
};

//! Creating Post
exports.createNote = (req, res, next) => {
  const errors = validationResult(req);

  // Validation Failed
  if (!errors.isEmpty()) {
    return res.status(422).json({ isSuccess: false, message: errors.array() });
  }

  const { title, content } = req.body;

  try {
    return res
      .status(201)
      .json({ message: "Post have been created.", data: req.body });
  } catch (error) {
    return res.status(409).json({ isSuccess: false, message: error });
  }
};
