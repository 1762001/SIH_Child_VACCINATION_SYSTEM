
const mongoose = require('mongoose');
const { Schema } = mongoose;

const HospitalSchema = new Schema({

    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required:true,
        unique:true
    },
    password:{
        type: String,
        required:true
    },
    timeStamp:{
        type:Date,
        default:Date.now
    },
    address:{
        type:String,
        required:true
    },

    city:{
        type:String,
        required:true
    },
    pincode:{
        type:Number,
        required:true
    }



});

const Hospital = mongoose.model('hospital' , HospitalSchema);

module.exports = Hospital;