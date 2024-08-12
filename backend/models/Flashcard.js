const db = require('../config/db');

const getAllFlashcards = (callback) => {
    db.query('SELECT * FROM flashcards', callback);
};

const getFlashcardById = (id, callback) => {
    db.query('SELECT * FROM flashcards WHERE id = ?', [id], callback);
};

const addFlashcard = (flashcard, callback) => {
    db.query('INSERT INTO flashcards SET ?', flashcard, callback);
};

const updateFlashcard = (id, flashcard, callback) => {
    db.query('UPDATE flashcards SET ? WHERE id = ?', [flashcard, id], callback);
};

const deleteFlashcard = (id, callback) => {
    db.query('DELETE FROM flashcards WHERE id = ?', [id], callback);
};

module.exports = {
    getAllFlashcards,
    getFlashcardById,
    addFlashcard,
    updateFlashcard,
    deleteFlashcard
};
