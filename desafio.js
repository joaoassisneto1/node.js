const express = require('express');
const app = express();

app.use(express.json());

app.post('/saudacao/:nome', (req, res) => {
    const { nome, idade } = req.body;
    if (idade < 18) {
        return res.send('Desculpe, ' + nome + '. Você não tem idade suficiente para acessar este conteúdo.');
    } else {
        return res.send('Olá, ' + nome + '! Você tem ' + idade + ' anos. Bem-vindo ao nosso site!');
    }
});

app.listen(3000, () => {
    console.log('Server running');
});