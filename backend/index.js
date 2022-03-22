const connectToMongo= require('./db.js');
const express = require('express');
connectToMongo();

// const { append } = require('vary');
var cors = require('cors')
const app = express();
const port = 5000;

app.use(cors())
app.use(express.json())

app.use('/api/auth',require('./routes/auth'));


app.listen(port, () => {
    console.log(`vaccine given at http://localhost:${port}`)
})