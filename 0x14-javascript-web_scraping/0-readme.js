#!/usr/bin/node

const fs = require('fs');
const filenames = process.argv[2];

fs.readFile(filenames, 'utf-8', (eorr, dater) => {
  if (eorr) {
    console.log(eorr);
  } else {
    console.log(dater);
  }
});
