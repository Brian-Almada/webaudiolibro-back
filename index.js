require('dotenv').config()
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const PORT = process.env.PORT
const Boock = require('./models/books');

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.post('/books', async (req, res) => {
    const { title, author } = req.body;
    try {
        const result = await Boock.create({ title, author });
        res.status(201).json({ok: true});
    } catch (error) {
        res.status(400).json({ok: false, error});
    }
})

    mongoose
        .connect(process.env.MONGO_URL, {})
            .then((conn) => {
                app.listen(PORT, async() => {
                    console.log(`App escuchando en PORT ${PORT}`);
                })
            })
            .catch((err) => console.log({err}))


