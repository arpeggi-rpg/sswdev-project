const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let bookingsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true,
        minLength: [10, 'Must be 10 characters'],
        maxLength: [10, 'Must be 10 characters']
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
        type: String,
        required: true,
        match: [/^\d+$/, 'Only numeric values permitted'],
        minLength: [16, 'Must be 16 digits'],
        maxLength: [16, 'Must be 16 digits']
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
        type: String,
        required: true,
        match: [/^\d+$/, 'Only numeric values permitted'],
        minLength: [3, 'Must be 3 digits'],
        maxLength: [3, 'Must be 3 digits']
    }
});
var bookings = mongoose.model('Booking', bookingsSchema);

module.exports = bookings;
