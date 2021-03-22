const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
  airport: {
    type: String,
    enum: ['AUS', 'DEN', 'DFW', 'LAX', 'SAN'],
  },
  arrival: Date,
});

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['American', 'Southwest', 'United'],
  },
  airport: {
    type: String,
    enum: ['AUS', 'DEN', 'DFW', 'LAX', 'SAN'],
    default: 'DEN',
  },
  flightNo: {
    type: Number,
    min: 10,
    max: 9999,
    required: true,
  },
  departs: {
    type: Date,
    default: function() {
      return new Date().getFullYear() + 1;
    },
  },
  destination: [destinationSchema],
});

module.exports = mongoose.model('Flight', flightSchema);
