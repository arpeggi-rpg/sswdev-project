var express = require('express');
var router = express.Router();
var bookings = require('../models/booking');

router.get('/', function(req, res) {
  res.render('create', { title: 'TrainingBookings'});
});

router.post('/', async function(req, res) {
  const name = req.body.name;
  const id = req.body.id;
  const bookingDate = req.body.bookingDate;
  const cardNo = req.body.cardNo;
  const expiryMonth = req.body.expiryMonth;
  const expiryYear = req.body.expiryYear;
  const securityCode = req.body.securityCode;
  const creationDate = new Date();

  await bookings.create({name, id, bookingDate, creationDate, cardNo, expiryMonth, expiryYear, securityCode});
  res.redirect(302, '/');
});

module.exports = router;
