/* eslint-disable no-unused-vars */
// index.js

const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');
const { fetchISSFlyOverTimes } = require('./iss');
const { nextISSTimesForMyLocation } = require(`./iss`);


fetchMyIP((err, ip) => {
  if (err) return err;
  fetchCoordsByIP(ip, (err, coords) => {
    if (err) return err;
    fetchISSFlyOverTimes(coords, (err, passes) => {
      if (err) return err;
      nextISSTimesForMyLocation(passes);
    });
  });
});
