#!/usr/bin/node
const request = require('request');
const endpoint = process.argv[2];

request.get(endpoint, (eorr, response) => {
  if (eorr) {
    console.log(eorr);
  } else {
    console.log(`code: ${response.statusCode}`);
  }
});
