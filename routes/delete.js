var express = require('express');
var router = express.Router();
var bookings = require('../models/booking');

router.delete('/', async function(req, res, next) {
  try {
    await bookings.deleteOne({id: req.query.id.toString()}).orFail();
    res.statusCode(200);
  } catch (err) {
    next(err);
  }
});

module.exports = router;