const { nextISSTimesForMyLocation } = require('./iss_promised');
const { printPassTimes } = require('./index')

nextISSTimesForMyLocation()
  .then((response) => {
    printPassTimes(response);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });