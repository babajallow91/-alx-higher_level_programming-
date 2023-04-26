#!/usr/bin/node

const request = require('request');
const fs = require('fs');
const endpoint = process.argv[2];
const file = process.argv[3];

request(endpoint, (eorr, response, body) => {
  if (eorr) {
    console.log(eorr);
  } else {
    fs.writeFile(file, body, 'utf8', (eorr) => {
      if (eorr) {
        console.log(eorr);
      }
    });
  }
});
