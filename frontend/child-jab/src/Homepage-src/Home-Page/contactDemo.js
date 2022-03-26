const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const https = require('https');

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/Contact")
})

app.post("/", (req, res) => {
    const fname = req.body.fName;
    const lname = req.body.lName;
    const email = req.body.email;
    const amount = req.body.amount;
    
    res.sendFile(__dirname + "/success.html");
})

app.listen(3000, () => {
    console.log("Server running on port 3000");
})

export default contactDemo;