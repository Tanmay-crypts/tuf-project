import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FlashCardForm from './FlashCardForm';

function Dashboard() {
    const [flashcards, setFlashcards] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/flashcards')
            .then(response => {
                setFlashcards(response.data);
            })
            .catch(error => {
                console.error('Error fetching flashcards', error);
            });
    }, []);

    const handleAddFlashcard = (flashcard) => {
        axios.post('http://localhost:5000/api/flashcards', flashcard)
            .then(response => {
                setFlashcards([...flashcards, response.data]);
            })
            .catch(error => {
                console.error('Error adding flashcard', error);
            });
    };

    const handleDeleteFlashcard = (id) => {
        axios.delete(`http://localhost:5000/api/flashcards/${id}`)
            .then(() => {
                setFlashcards(flashcards.filter(card => card.id !== id));
            })
            .catch(error => {
                console.error('Error deleting flashcard', error);
            });
    };

    return (
        <div className="dashboard">
            <h2>Admin Dashboard</h2>
            <
        