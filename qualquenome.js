// Código com Express.js
const express = require('express');
const app = express();

app.use(express.json());

app.post('/segunda/:nome', (req, res) => {
    const dados = req.body
    console.log(dados)
    res.send(req.params.nome);
});

app.get('/tarca', (req, res) => {
    res.send('ROTA GET /TERCA');
});

app.listen(3000, () => {
    console.log('Server running');
});