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
  }).
  sort({ 'WH': -1 })
})

// READ Readings for serial
  router.route('/get-serial-readings/:serial').get((req, res) => {
    readingSchema.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    }).select('serial -_id')
  })

// READ serial list
router.route('/get-serial-list').get((req, res) => {
  readingSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  }).select('serial -_id')
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
