
const mongoose = require('mongoose');
const { Schema , Types } = mongoose;
const {ObjectId} = Types
const ChildSchema = new Schema({

  
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
        type:Date
    }
    


});

const Child = mongoose.model('child' , ChildSchema);

module.exports = Child;