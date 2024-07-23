//* Packages
const { validationResult } = require("express-validator");

//* Locals
const Note = require("../models/note");

//* Getting all nosts
exports.findAllNotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    return res
      .status(200)
      .json({ isSuccess: true, message: "Happy Coding.", notes });
  } catch (error) {
    return res.status(409).json({ isSuccess: false, message: error.message });
  }
};

//* Getting note by Id
exports.findNoteById = async (req, res) => {
  const { noteId } = req.params;
  try {
    const note = await Note.findById(noteId);

    if (!note) {
      throw new Error("Note not found with this id.");
    }

    return res
      .status(200)
      .json({ isSuccess: true, message: "Happy Coding.", note });
  } catch (error) {
    return res.status(409).json({ isSuccess: false, message: error.message });
  }
};

//* Creating note
exports.createNote = async (req, res) => {
  const errors = validationResult(req);

  // Validation Failed
  if (!errors.isEmpty()) {
    return res.status(422).json({ isSuccess: false, message: errors.array() });
  }

  const { title, content } = req.body;

  try {
    // Create Note
    const note = await Note.create({ title, content });
    return res
      .status(201)
      .json({ isSuccess: true, message: "Note Created.", note });
  } catch (error) {
    return res.status(409).json({ isSuccess: false, message: error.message });
  }
};

//* Updating Note
exports.updateNote = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({ isSuccess: false, message: errors.array() });
  }
  const { noteId } = req.params;
  const { title, content } = req.body;
  try {
    const note = await Note.findById(noteId);

    if (!note) {
      throw new Error("Note not found with this id.");
    }

    note.title = title;
    note.content = content;
    note.save();

    return res.status(200).json({ isSuccess: true, message: "Note Updated." });
  } catch (error) {
    return res.status(409).json({ isSuccess: false, message: error.message });
  }
};

//* Deleting note
exports.deleteNote = async (req, res) => {
  const { noteId } = req.params;

  try {
    await Note.findByIdAndDelete(noteId);
    return res.status(200).json({ isSuccess: true, message: "Note Deleted." });
  } catch (error) {
    return res.status(409).json({ isSuccess: false, message: error.message });
  }
};
