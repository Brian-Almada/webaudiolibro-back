require('dotenv').config()
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const PORT = process.env.PORT

app.get('/', (req, res) => {
    res.send('Hello World!');
})

mongoose.connect(process.env.MONGO_URL, {}, () => {
    app.listen(PORT, () => {
        console.log(`App escuchando en PORT ${PORT}`);
    })
})

