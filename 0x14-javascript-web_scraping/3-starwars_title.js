#!/usr/bin/node

const request = require('request');
const videoId = process.argv[2];
const endpoint = `https://swapi-api.alx-tools.com/api/films/${videoId}`;

request.get(endpoint, (eorr, response, body) => {
  if (eorr) {
    console.log(eorr);
  } else {
    const data = JSON.parse(body);
    console.log(data.title);
  }
});
