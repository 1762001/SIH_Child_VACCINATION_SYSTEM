const mongoose = require('mongoose');
const { Schema , Types } = mongoose;
const {ObjectId} = Types

const VaccineSchema = new Schema({
    name:{
        type:String,
        required:true
        
    },
    date:{
        type:Date
    },
    vaccinated:{
        type:Boolean,
        required:true
    },
    days_left : {

        type:Number,
        required:true
    }

});
const Vaccine = mongoose.model('vaccine' , VaccineSchema);

module.exports = Vaccine;