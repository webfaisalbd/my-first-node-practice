const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send("hello getting start.");
})

const users = [
    { id: 1, name: "Faisal", age: "24", email: 'faisal@gmail.com' },
    { id: 2, name: "Ahmed", age: "15", email: 'ahmed@gmail.com' },
    { id: 3, name: "Rasel", age: "21", email: 'rasel@gmail.com' },
    { id: 4, name: "Polard", age: "28", email: 'polard@gmail.com' },
    { id: 5, name: "Gayle", age: "35", email: 'gayle@gmail.com' }
]

app.get('/users', (req, res) => {
    res.send(users);
})

app.get('/user/:id', (req, res) => {
    const id = req.params.id;
    const user = users.find((u) => u.id == id);
    res.send(user)
})


app.listen(PORT, () => {
    console.log(`running port at http://localhost:${PORT}`);
})
