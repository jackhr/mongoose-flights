require('./config/database');
const Flight = require('./models/flight');


Flight.find({}, (err, flights) => console.log(flights));