var express = require('express');
var router = express.Router();
var bookingsModel = require('../models/booking');

router.get('/', async function(req, res, next) {
  try {
    let bookings = await bookingsModel.find({_id: {$in: req.query.ids.split("+")}}).orFail();
    res.render('viewreport', {title: 'TrainingBookings', bookings});
  } catch (err) {
    next(err);
  }
});

module.exports = router;