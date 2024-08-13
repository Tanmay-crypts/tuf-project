import React, { useState } from 'react';

function FlashCard({ flashcard }) {
    const [flipped, setFlipped] = useState(false);

    const handleClick = () => {
        setFlipped(!flipped);
    };

    return (
        <div className="flash-card" onClick={handleClick}>
            {flipped ? (
                <div className="flash-card-back">
                    <h3>{flashcard.answer}</h3>
                </div>
            ) : (
                <div className="flash-card-front">
                    <h1>{flashcard.question}</h1>
                </div>
            )}
        </div>
    );
}

export default FlashCard;