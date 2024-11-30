var express = require('express');
var router = express.Router();
var bookings = require('../models/booking');

router.get('/', async function(req, res, next) {
  try {
    let booking = await bookings.findOne({id: req.query.id.toString()}).orFail();
    res.render('update', {title: 'TrainingBookings', booking});
  } catch (err) {
    next(err);
  }
});

router.post('/', async function(req, res, next) {
    try {
      let formResponse = {
        name: req.body.name,
        id: req.body.id,
        bookingDate: req.body.bookingDate,
        creationDate: req.body.creationDate,
        cardNo: req.body.cardNo,
        expiryMonth: req.body.expiryMonth,
        expiryYear: req.body.expiryYear,
        securityCode: req.body.securityCode
      }
      await bookings.replaceOne({id: formResponse.id}, formResponse).orFail();
      res.redirect(302, '/');
    } catch (err) {
      next(err);
    }
  });

module.exports = router;
