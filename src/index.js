import uniqueRandomArray from 'unique-random-array';
const warcraftNames = require('./warcraft-names.json');

const mainExport = {
  all: warcraftNames,
  random: uniqueRandomArray(warcraftNames),
};

export default mainExport;
module.exports = mainExport; // for CommonJS compatibility
