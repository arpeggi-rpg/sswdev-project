const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let bookingsSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    id: {
        type: String,
        required: true,
        max: [10, 'Must be 10 characters or fewer']
    },
    bookingDate: {
        type: Date,
        required: true
    },
    creationDate: {
        type: Date,
        required: true
    },
    cardNo: {
        type: BigInt,
        required: true
    },
    expiryMonth: {
        type: Number,
        required: true
    },
    expiryYear: {
        type: Number,
        required: true
    },
    securityCode: {
        type: Number,
        required: true,
        max: [3, 'Must be 3 characters or fewer']
    }
});
var bookings = mongoose.model('Booking', bookingsSchema);

module.exports = bookings;
