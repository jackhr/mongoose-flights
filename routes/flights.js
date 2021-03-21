const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights.js');

// GET /flights
router.get('/', flightsCtrl.index);
// GET /flights/:id
router.get('/:id', flightsCtrl.show);
// POST /flights
router.post('/', flightsCtrl.create);
// PUT /flights/:id
router.put('/:id', flightsCtrl.update);
// DELETE /flights:id
router.delete('/:id', flightsCtrl.delete);

module.exports = router;
