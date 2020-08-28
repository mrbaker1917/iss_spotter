const request = require('request-promise-native');
const fetchMyIP = function() {
  return request('https://api.ipify.org/?format=json');
};

const fetchCoordsByIP = function(body) {
  const ip = JSON.parse(body).ip;
  const searchAddress2 = `https://ipvigilante.com/${ip}`;
  return request(searchAddress2);
};

const fetchISSFlyOverTimes = function(body) {
  const { latitude, longitude } = JSON.parse(body).data;
  const searchAddress3 = `http://api.open-notify.org/iss-pass.json?lat=${latitude}&lon=${longitude}`;
  return request(searchAddress3);
};

const nextISSTimesForMyLocation = function() {
  return fetchMyIP()
  .then(fetchCoordsByIP)
  .then(fetchISSFlyOverTimes)
  .then(data => {
    const { response } = JSON.parse(data);
    return response;
  });
};

module.exports = { nextISSTimesForMyLocation };