const mongoose = require('mongoose');
const { Schema , Types } = mongoose;
const {ObjectId} = Types

const VaccineSchema = new Schema({

    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'child'
    },
    vaccinename:{
        type:String,
        required:true
        
    },
    date:{
        type:Date
    },
    vaccinated:{
        type:Boolean,
        // required:true
    },
    days_left : {

        type:Number,
        // required:true
    },
    notifications_sent:{
        type:Boolean,
        required:true
    }

});
const Vaccine = mongoose.model('vaccine' , VaccineSchema);

module.exports = Vaccine;