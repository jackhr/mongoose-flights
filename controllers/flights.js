const Flight = require('../models/flight');

module.exports = {
  index,
  show,
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

function show(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    if (err) console.log(err);
      const dt = flight.departs;
      const departsDate = dt.toISOString().slice(0, 16);
      res.render('flights/show', { flight, departsDate })
  })
}


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
  const newFlight = new Flight();
  // Obtain the default date
  console.log(newFlight);
  const dt = newFlight.departs;
  // Formats the date for the value attribute of the input
  const departsDate = dt.toISOString().slice(0, 16).split('-');
  departsDate[0] = '2022';
  const defaultDate = departsDate.join('-');
  res.render('flights/new', { defaultDate });
}