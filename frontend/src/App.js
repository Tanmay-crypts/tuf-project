import React from 'react';
import FlashCardList from './components/FlashCardList';
import Dashboard from './components/Dashboard';

function App() {
    return (
        <div className="app">
            <h1>Flashcard Learning Tool</h1>
            <FlashCardList />
            <Dashboard />
        </div>
    );
}

export default App;
