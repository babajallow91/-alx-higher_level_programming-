#!/usr/bin/node

const request = require('request');

const videoId = process.argv[2];
const endpoint = `https://swapi.dev/api/films/${videoId}/`;
let characters = [];

request(endpoint, (eorr, response, body) => {
  if (eorr) {
    console.log(eorr);
    return;
  }

  const data = JSON.parse(body);
  characters = data.characters;
  getCharacters(0);
});

const getCharacters = (index) => {
  if (index === characters.length) {
    return;
  }

  request(characters[index], (eorr, response, body) => {
    if (eorr) {
      console.log(eorr);
      return;
    }
    const characterData = JSON.parse(body);
    console.log(characterData.name);
    getCharacters(index + 1);
  });
};
