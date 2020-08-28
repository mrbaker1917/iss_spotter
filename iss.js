const request = require('request');

const fetchMyIP = function(callback) {
  const searchAddress = 'https://api.ipify.org/?format=json';
  request(searchAddress, (error, res, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    if (res.statusCode !== 200) {
      const msg = `Status Code ${res.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    const ip = JSON.parse(body).ip;
    callback(error, ip);
  });
};

const fetchCoordsByIP = function(ip, callback) {
  const searchAddress2 = `https://ipvigilante.com/${ip}`;
  request(searchAddress2, (error, res, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    if (res.statusCode !== 200) {
      const msg = `Status Code ${res.statusCode} when fetching coordinates for IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    const { latitude, longitude } = JSON.parse(body).data;
    const location = { latitude, longitude };
    callback(error, location);
  });
};

const fetchISSFlyOverTimes = function(coords, callback) {
  const searchAddress3 = `http://api.open-notify.org/iss-pass.json?lat=${coords.latitude}&lon=${coords.longitude}`;
  request(searchAddress3, (error, res, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    if (res.statusCode !== 200) {
      const msg = `Status Code ${res.statusCode} when fetching ISS flyover data. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    const flyovers = JSON.parse(body).response;
    callback(null, flyovers);
  });
};

module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes };