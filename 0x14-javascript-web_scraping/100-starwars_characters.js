#!/usr/bin/node

const request = require('request');

const videoId = process.argv[2];
const endpoint = `https://swapi.dev/api/films/${videoId}/`;

request.get(endpoint, (eorr, response, body) => {
  if (eorr) {
    console.log(eorr);
    return;
  }

  const data = JSON.parse(body);
  const characters = data.characters;
  for (const character of characters) {
    request(character, (eorr, response, body) => {
      if (eorr) {
        console.log(eorr);
        return;
      }
      const characterData = JSON.parse(body);
      console.log(characterData.name);
    });
  }
});
