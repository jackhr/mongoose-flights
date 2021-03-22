const express = require('express');
const router = express.Router();
const destinationsCtrl = require('../controllers/destinations.js');

// POST /flight/:id/destinations
router.post('/flights/:id/destinations', destinationsCtrl.create);

module.exports = router;