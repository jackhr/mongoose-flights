const Flight = require('../models/flight');

module.exports = {
  index,
  // show,
  new: newFlight,
  create,
  // update,
  // delete: deleteFlight
};

function index(req, res) {
  Flight.find({}, function(err, flights) {
    if (err) console.log(err);
    res.render('flights/index', { flights });
  });
}

// function show(req, res) {
//   Flight.findById(req.params.id, function(err, flight) {
//     if (err) console.log(err);
//     res.send(flight);
//   })
// }


function create(req, res) {
  Flight.create(req.body, function(err, flight) {
    if (err) console.log(err);
    res.redirect(`/flights`);
  })
}

// function update(req, res) {
//   Flight.findById(req.params.id, function(err, flight) {
//     const updatedFlight = {...flight, ...req.body};
//     Flight.findByIdAndUpdate(req.params.id, updatedFlight, function(err, pupper) {
//       if (err) console.log(err);
//       res.redirect(`/flights/${req.params.id}`);
//     })
//   })
// }

// function deleteFlight(req, res) {
//   Flight.findOneAndDelete(req.params.id, function(err, deletedFlight) {
//     if (err) console.log(err);
//     res.redirect('/flights');
//   })
// }

function newFlight(req, res) {
  res.render('flights/new');
}