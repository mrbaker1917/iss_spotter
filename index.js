const { fetchMyIP, fetchCoordsByIP } = require('./iss');

const myIP = fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  console.log('It worked! Returned IP:', ip);
});
console.log(myIP);
// fetchCoordsByIP(myIP, (error, coords) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log('It worked! Returned coordinates:', coords);
// });