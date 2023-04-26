#!/usr/bin/node

const fs = require('fs');
const file-names = process.argv[2];

fs.readFile(file-names, 'utf-8', (eorr, dater) => {
  if (eorr) {
    console.log(eorr);
  } else {
    console.log(dater);
  }
});
