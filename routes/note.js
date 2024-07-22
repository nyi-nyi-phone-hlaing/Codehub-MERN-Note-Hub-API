//! Packages
const express = require("express");

//! Locals
const noteControllers = require("../controllers/note");
const noteValidators = require("../validators/note");

//! Initializing
const router = express.Router();

//? GET => /posts
router.get("/notes", noteControllers.findAllNotes);

//? POST => /create-post
router.post(
  "/create-note",
  noteValidators.noteTitleValidation("title"),
  noteValidators.noteContentValidation("content"),
  noteControllers.createNote
);

//? PATCH => /edit-note/:id

module.exports = router;
