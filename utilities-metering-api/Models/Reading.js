const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let readingSchema = new Schema({
  serial: {
    type: String
  },
  readingDateTimeUTC: {
    type: String
  },
  WH: {
    type: Number
  },
  VARH: {
    type: Number
  }
}, {
    collection: 'readings'
  })

module.exports = mongoose.model('Reading', readingSchema)