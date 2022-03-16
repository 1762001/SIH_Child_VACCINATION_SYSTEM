const connectToMongo= require('./db.js');
const express = require('express');
const { append } = require('vary');
connectToMongo();
const app = express();
const port = 5000;
app.listen(port, () => {
    console.log(`vaccine given at http://localhost:${port}`)
})