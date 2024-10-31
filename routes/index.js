var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'TrainingBookings', bookings: [{
    name: "John Doe",
    id: "1234567890",
    bookingDate: new Date(2024, 12, 15),
    creationDate: new Date(),
    cardNo: "1234567812345678",
    expiryMonth: "01",
    expiryYear: "30",
    securityCode: "123"
  },
  {
    name: "John Doe",
    id: "1234567890",
    bookingDate: new Date(2024, 12, 15),
    creationDate: new Date(),
    cardNo: "1234567812345678",
    expiryMonth: "01",
    expiryYear: "30",
    securityCode: "123"
  },
  {
    name: "John Doe",
    id: "1234567890",
    bookingDate: new Date(2024, 12, 15),
    creationDate: new Date(),
    cardNo: "1234567812345678",
    expiryMonth: "01",
    expiryYear: "30",
    securityCode: "123"
  }]});
});

module.exports = router;
