const mongoose = require('mongoose');
const mongoURL = "mongodb+srv://saikat:Family@childvaccine.xmtdc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectToMongo = () => {
    mongoose.connect(mongoURL , () =>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports=connectToMongo;