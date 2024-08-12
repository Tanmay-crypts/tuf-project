const express = require('express');
const app = express();
const cors = require('cors');
const flashcardRoutes = require('./routes/flashcards');
const db = require('./config/db');

app.use(cors());
app.use(express.json());

app.use('/api/flashcards', flashcardRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
