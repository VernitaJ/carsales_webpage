const mongoose = require('mongoose');

const Car = new mongoose.Schema({
    brand:  {type: String},
    model: {type: String},
    year: {type: Number},
    colour: {type: String},
    price: {type: Number}
})

module.exports = mongoose.models.Car || mongoose.model('Car', Car)