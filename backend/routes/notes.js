const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Note = require('../models/Note');
const { body, validationResult } = require('express-validator');
const { contextsKey } = require('express-validator/lib/base');

// GET request for /api/notes/fetchallnotes.
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id });  // Find all the notes of the user.
        res.json(notes);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal Server Error');
    }
});

// POST request for /api/notes/addnote.
router.post('/addnote', fetchuser, [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'Description must be atleast 5 characters').isLength({ min: 5 }),
], async (req, res) => {
    try {
        const { title, description, tag } = req.body;

        // If there are errors, return Bad Request and the errors.
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const note = new Note({
            title, description, tag, user: req.user.id
        });
        const savedNote = await note.save();
        res.json(savedNote);

    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal Server Error');
    }
});

// PUT request for /api/notes/updatenote/:id.
router.put('/updatenote/:id', fetchuser, async (req, res) => {
    try{
        const { title, description, tag } = req.body;
        // Create a newNote object.
        const newNote = {};
        if (title) { newNote.title = title};
        if (description) { newNote.description = description};
        if (tag) { newNote.tag = tag};

        // Find the note to be updated and update it.
        let note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).send('Not Found');
        }
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send('Not Allowed');
        }
        
        note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });
        res.json({note});
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal Server Error');
    }
});

// DELETE request for /api/notes/deletenote/:id.
router.delete('/deletenote/:id', fetchuser, async (req, res) => {
    try {
        // Find the note to be deleted and delete it.
        let note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).send('Not Found');
        }
        // Allow deletion only if user owns this note.
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send('Not Allowed');
        }
        note = await Note.findByIdAndDelete(req.params.id);
        res.json({ "Success": "Note has been deleted", note: note });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal Server Error');
    }
});
module.exports = router;