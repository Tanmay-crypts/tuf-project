import React, { useState } from 'react';

function FlashCardForm({ onAddFlashcard }) {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (question && answer) {
            onAddFlashcard({ question, answer });
            setQuestion('');
            setAnswer('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Add New Flashcard</h3>
            <div>
                <label>Question:</label>
                <input
                    type="text"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Answer:</label>
                <input
                    type="text"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Add Flashcard</button>
        </form>
    );
}

export default FlashCardForm;