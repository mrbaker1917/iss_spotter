const { nextISSTimesForMyLocation } = require('./iss');

const printPassTimes = function(flyovers) {
  for (let time of flyovers) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(time.risetime);
    const duration = time.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
  console.log("I ran");
};

nextISSTimesForMyLocation((error, flyoverTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  printPassTimes(flyoverTimes);
});

module.exports = { printPassTimes };