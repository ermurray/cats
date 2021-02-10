// asyncBreeds.js
const fs = require('fs');
const { callbackify } = require('util');
const breedDetails = require('./syncBreeds');

const breedDetailsFromFile = function(breed, functionToRunWhenThingsAreDone) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    if (!error) functionToRunWhenThingsAreDone(data);
  });
};

const printOutCatBreed = breed =>{
  console.log('Return Value: ', breed);

};
breedDetailsFromFile('Bombay', printOutCatBreed);

module.exports = breedDetails;