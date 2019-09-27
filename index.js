/* eslint-disable no-unused-vars */
// index.js

const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');
const { fetchISSFlyOverTimes } = require('./iss');
const { nextISSTimesForMyLocation } = require(`./iss`);


fetchMyIP((error, ip) => {
  fetchCoordsByIP(ip, (err, coords) => {
    fetchISSFlyOverTimes(coords, (err, passes) => {
      const printPassTimes = function(passTimes) {
        for (const pass of passTimes) {
          const datetime = new Date(0);
          datetime.setUTCSeconds(pass.risetime);
          const duration = pass.duration;
          console.log(`The next pass is at ${datetime} for ${duration} seconds!`);
        }
      };
      nextISSTimesForMyLocation((error, passTimes) => {
        if (error) {
          return console.log("It didn't work!", error);
        }
        printPassTimes(passTimes);
      });
    });
  });
});

