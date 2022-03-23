
const mongoose = require('mongoose');
const { Schema , Types } = mongoose;
const {ObjectId} = Types
const ChildSchema = new Schema({

    uid:{
        type:ObjectId,
        required:true,
        unique:true
    },
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
    },
    dob:{
        type:Date,
        required:true
    }
    


});

const Child = mongoose.model('child' , ChildSchema);

module.exports = Child;