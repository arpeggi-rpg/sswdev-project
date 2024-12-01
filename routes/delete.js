var express = require('express');
var router = express.Router();
var bookingsModel = require('../models/booking');

router.delete('/', async function(req, res, next) {
  try {
    await bookingsModel.deleteOne({id: req.query.id.toString()}).orFail();
    res.statusCode(200);
  } catch (err) {
    next(err);
  }
});

module.exports = router;