const app = require('express')();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

//Implementando middleware 
function log(req, res, next) {
    const { url, method } = req;
    console.log(`${method} - ${url} at ${new Date()}`);
    return next();
}
//Usando a middleware criada
app.use(log);


let products = [
    { id: 1, name: "Arroz", price: "11,00" },
    { id: 2, name: "Feijão", price: "7,90" },
    { id: 3, name: "Açucar", price: "4,00" },
    { id: 4, name: "Sal", price: "2,50" },
    { id: 5, name: "Leite", price: "3,80" },
]


app.get('/products', (req, res) => res.status(200).json(products));

app.get('/products/:id', (req, res) => {
    // res.json(products.filter(value => value.id == req.params.id));
    const { id } = req.params;
    const product = products.find(value => value.id == id);
    if (product == undefined) {
        res.status(400).json({ error: 'Requisição Inválida' });
    } else {
        res.status(200).json(product);
    }
})

app.post('/products', (req, res) => {
    const product = req.body;
    products.push = (product);

    res.status(201).json(product);
})

app.put('/products/:id', (req, res) => {
    const id = req.params.id;
    const price = req.body.price;

    let product = products.find(value => value.id == id);
    if (product == undefined) {
        res.status(400).send();
    } else {
        product.price = price;
        res.status(200).json(product);
    }

})

app.delete('/products/:id', (req, res) => {
    const { id } = req.params;
    const productIndex = products.findIndex(value => value.id == id);
    if (productIndex == -1) {
        res.status(400).send();
    } else {
        products.splice(productIndex, 1);
        res.status(204).send();
    }
})

app.listen(3000);