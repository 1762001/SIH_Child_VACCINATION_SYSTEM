const  mongoose = require('mongoose');

const { Schema } = mongoose;

const doseSchema = new Schema({
    VaccineName: {
        type: String,
        required: true
    },
    Quantity: {
        type: Number,
        required: true
    }
})

const Dose = mongoose.model('dose' , doseSchema);

module.exports = Dose;