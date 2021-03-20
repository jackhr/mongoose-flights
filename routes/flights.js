const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights.js');

// GET /movies
router.get('/', flightsCtrl.index);

module.exports = router;
