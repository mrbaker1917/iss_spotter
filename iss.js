const request = require('request');

const fetchMyIP = function(callback) {
  const searchAddress = 'https://api.ipify.org/?format=json';
  request(searchAddress, (error, res, body) => {
    if (error) {
      callback(error, null);
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

module.exports = { fetchMyIP };