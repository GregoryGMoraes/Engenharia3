const app = require('express')();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

//const clients =
let clients = [
    { id: 4, nome: 'Grégory Moraes', telefone: '53991584695' },
    { id: 3, nome: 'Janaina Jacques', telefone: '53458799658' },
    { id: 1, nome: 'Amora Moraes', telefone: '53991478912' },
    { id: 2, nome: 'Isabella Jacques', telefone: '53991569785' },
];

//retorno de todods os clientes em uma linha só
app.get('/clients', (req, res) => res.json(clients))

/**
 * Buscar um único recurso
 */
app.get('/clients/:id', (req, res) => {
    const client = clients.filter(value => value.id == req.params.id);
    res.json(client);
})

app.post('/clients', (req, res) => {
    const client = req.body;
    clients.push(client);
    res.json(client);
})


/**
 * Atualizar nome de clients
 */
app.put('/clients/:id', (req, res) => {
    const id = req.params.id;
    const nome = req.body.nome;

    let client = clients.filter(value => value.id == id);
    client[0].nome = nome;

    res.json(client[0]);

})


app.delete('/clients/:id', (req, res) => {
    const id = req.params.id;
    clients = clients.filter(value => value.id != id);
    res.json(clients);
})



app.listen(3000);