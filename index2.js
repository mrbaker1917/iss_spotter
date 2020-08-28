const { nextISSTimesForMyLocation } = require('./iss_promised');

const printPassTimes = function(flyovers) {
  for (let time of flyovers) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(time.risetime);
    const duration = time.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation()
  .then((response) => {
    printPassTimes(response);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });