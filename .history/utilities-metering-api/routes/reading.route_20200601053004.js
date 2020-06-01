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

// READ Readings for serial
router.route('/get-serial-readings/:serial').get((req, res) => {
  readingSchema.find(req.params.serial, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single Reading
router.route('/get-reading/:id').get((req, res) => {
    readingSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// CREATE Reading (For import only)
router.route('/create-reading').post((req, res, next) => {
    readingSchema.create(req.body, (error, data) => {
      if (error) {
        return next(error)
      } else {
        console.log(data)
        res.json(data)
      }
    })
  });

module.exports = router;
