//* Packages
const express = require("express");

//* Locals
const noteControllers = require("../controllers/note");
const noteValidators = require("../validators/note");

//* Initializing
const router = express.Router();

//? GET => /notes
router.get("/notes", noteControllers.findAllNotes);

//? GET => /notes/:noteId
router.get("/notes/:noteId", noteControllers.findNoteById);

//? POST => /create-note
router.post(
  "/create-note",
  noteValidators.noteTitleValidation("title"),
  noteValidators.noteContentValidation("content"),
  noteControllers.createNote
);

//? PATCH => /edit-note/:noteId
router.patch(
  "/edit-note/:noteId",
  noteValidators.noteTitleValidation("title"),
  noteValidators.noteContentValidation("content"),
  noteControllers.updateNote
);

//? DELETE =>  /delete-note/:noteId
router.delete("/delete-note/:noteId", noteControllers.deleteNote);

module.exports = router;
