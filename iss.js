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
    const location = {latitude, longitude};
    callback(error, location);
  });
};

module.exports = { fetchMyIP, fetchCoordsByIP };