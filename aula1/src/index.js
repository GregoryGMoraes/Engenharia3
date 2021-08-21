const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json({ mensagem: 'Hello, EXPRESS! with JSON' });
})

app.get('/array', (req, res) => {
    res.json([1, 2, 3, 4])
})

app.listen(3000);