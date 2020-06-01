let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// Reading Model
let readingSchema = require('../models/Reading');

// READ Readings
router.route('/').get((req, res) => {
  readingSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single Reading
router.route('/reading/:id').get((req, res) => {
    readingSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

module.exports = router;
