const { nextISSTimesForMyLocation } = require('./iss_promised');

const printPassTimes = function(flyovers) {
  for (let time of flyovers) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(time.risetime);
    const durationMins = Math.round(time.duration / 60);
    const durationSecs = time.duration % 60;
    console.log(`Next pass at ${datetime} for ${durationMins} minutes and ${durationSecs} seconds!`);
  }
};

nextISSTimesForMyLocation()
  .then((response) => {
    printPassTimes(response);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });