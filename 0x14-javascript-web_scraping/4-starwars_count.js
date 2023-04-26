#!/usr/bin/node

const request = require('request');
const endpoint = process.argv[2];
const characterId = '18';
let count = 0;

request.get(endpoint, (eorr, response, body) => {
  if (eorr) {
    console.log(eorr);
  } else {
    const data = JSON.parse(body);
    data.results.forEach((film) => {
      film.characters.forEach((character) => {
        if (character.includes(characterId)) {
          count += 1;
        }
      });
    });
    console.log(count);
  }
});
