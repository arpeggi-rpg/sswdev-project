var express = require('express');
var router = express.Router();
var bookingsModel = require('../models/booking');

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    const existingBookings = await bookingsModel.find({});
    res.render('index', {title: 'TrainingBookings', bookings: existingBookings});
  } catch (err) {
    next(err);
  }
});

module.exports = router;
