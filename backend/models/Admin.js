const mongoose = require('mongoose');
const { Schema } = mongoose;

const adminSchema = new Schema({
    adminName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const Admin = mongoose.model('admin',adminSchema);
module.exports=Admin;