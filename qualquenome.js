// Código com Express.js
const express = require('express');
const app = express();

app.post('/casaum', (req, res) => {
    res.send('Hello Word');
});

app.get('/casa', (req, res) => {
    res.send('Hello Word');
});

app.listen(3001, () => {
    console.log('Server running');
});