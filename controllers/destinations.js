const Flight = require('../models/flight');

module.exports = {
  create
};

function create(req, res) {
  console.log(req.body);
  Flight.findById(req.params.id).sort({arrival: "ascending"}).exec(function(err, flight) {
    flight.destinations.push(req.body);
    flight.save(function(err) {
      res.redirect(`/flights/${flight._id}`);
    });
  });
}

// function index(req, res) {
//   Flight.find({}).sort({departs: "ascending"}).exec(function(err,flights) {
//       res.render('flights/index', { flights });
//   });
// }

// function index(req, res) {
//   Flight.find({}, function(err, flights) {
//     if (err) console.log(err);
//     res.render('flights/index', { flights });
//   });
// }