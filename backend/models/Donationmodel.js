const mongoose = require('mongoose');
const { Schema } = mongoose;

const DonationSchema = new Schema({
    DonatorName:{
        type: String,
        required: true
    },
    Phone:{
        type:Number,
        required:true
    },
    amount:{
        type: Number,
        required: true
    }

})
const Donation = mongoose.model('donation' , DonationSchema);

module.exports = Donation;