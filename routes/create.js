var express = require('express');
var router = express.Router();
var bookings = require('../models/booking');

router.get('/', function(req, res) {
  res.render('create', { title: 'TrainingBookings'});
});

router.post('/', async function(req, res, next) {
  try {
    let formResponse = {
      name: req.body.name,
      id: req.body.id,
      bookingDate: req.body.bookingDate,
      cardNo: req.body.cardNo,
      expiryMonth: req.body.expiryMonth,
      expiryYear: req.body.expiryYear,
      securityCode: req.body.securityCode,
      creationDate: new Date()
    }
    await bookings.create(formResponse);
    res.redirect(302, '/');
  } catch (err) {
    next(err);
  }
});

module.exports = router;
