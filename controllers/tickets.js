const Ticket = require('../models/ticket');
// const Flight = require('../models/flight');

module.exports = {
  create,
  new: newTicket,
};

function newTicket(req, res) {
  const flightId = req.params.id;
  res.render(`tickets/new`, { flightId });
}


function create(req, res) {
  req.body.flight = req.params.id;
  Ticket.create(req.body, function(err, ticket) {
    if (err) console.log(err);
    res.redirect(`/flights/${req.params.id}`);
  })
}

// function create(req, res){
//   req.body.flight = req.params.id;
//   const ticket = new Ticket(req.body);
//   ticket.save(function(err){
//       console.log(err)
//       res.redirect(`/flights/${req.params.id}`)
//   })
// }