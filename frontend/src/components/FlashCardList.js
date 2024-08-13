import React, { useState, useEffect } from 'react';
import FlashCard from './FlashCard';
import axios from 'axios';

function FlashCardList() {
    const [flashcards, setFlashcards] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        axios.get('http://localhost:5000/api/flashcards')
            .then(response => {
                setFlashcards(response.data);
            })
            .catch(error => {
                console.error('Error fetching flashcards', error);
            });
    }, []);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + flashcards.length) % flashcards.length);
    };

    return (
        <div className="flashcard-container">
            {flashcards.length > 0 && (
                <div>
                    <FlashCard flashcard={flashcards[currentIndex]} />
                    <button onClick={handlePrevious}>Previous</button>
                    <button onClick={handleNext}>Next</button>
                </div>
            )}
        </div>
    );
}

export default FlashCardList;
