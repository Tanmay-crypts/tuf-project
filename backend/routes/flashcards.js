const express = require('express');
const router = express.Router();
const Flashcard = require('../models/Flashcard');

// Get all flashcards
router.get('/', (req, res) => {
    Flashcard.getAllFlashcards((err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
});

// Get flashcard by ID
router.get('/:id', (req, res) => {
    Flashcard.getFlashcardById(req.params.id, (err, result) => {
        if (err) return res.status(500).json(err);
        res.json(result);
    });
});

// Add a new flashcard
router.post('/', (req, res) => {
    Flashcard.addFlashcard(req.body, (err, result) => {
        if (err) return res.status(500).json(err);
        res.json(result);
    });
});

// Update a flashcard
router.put('/:id', (req, res) => {
    Flashcard.updateFlashcard(req.params.id, req.body, (err, result) => {
        if (err) return res.status(500).json(err);
        res.json(result);
    });
});

// Delete a flashcard
router.delete('/:id', (req, res) => {
    Flashcard.deleteFlashcard(req.params.id, (err, result) => {
        if (err) return res.status(500).json(err);
        res.json(result);
    });
});

module.exports = router;
