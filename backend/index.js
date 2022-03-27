const connectToMongo= require('./db.js');
const express = require('express');
connectToMongo();


var cors = require('cors')
const app = express();
const port = 5000;

app.use(cors())
app.use(express.json())

app.use('/api/auth',require('./routes/auth'));
app.use('/api/childauth',require('./routes/child_auth'));
app.use('/api/vacs',require('./routes/vaccine_route'));
app.use('/api/donation',require('./routes/donation'));
// app.use('/api/dose',require('./routes/dose'));
app.listen(port, () => {
    console.log(`vaccine given at http://localhost:${port}`)
})