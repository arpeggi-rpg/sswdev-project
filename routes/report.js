var express = require('express');
var router = express.Router();
var bookingsModel = require('../models/booking');

router.get('/', function(req, res) {
    res.render('report', {title: 'TrainingBookings'});
});

router.post('/', async function(req, res, next) {
    try {
      let formResponse = {
        name: req.body.name,
        fromDate: req.body.fromDate,
        toDate: req.body.toDate
      };
      let bookings = await bookingsModel.find({name: formResponse.name, bookingDate: {"$gte": formResponse.fromDate, "$lte": formResponse.toDate}});
      res.render('report', {title: 'TrainingBookings', bookings});
    } catch (err) {
      next(err);
    }
  });

module.exports = router;