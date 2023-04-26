#!/usr/bin/node

const fs = require('fs');
const filenames = process.argv[2];
const text = process.argv[3];

fs.writeFile(filenames, text, 'utf-8', (eorr) => {
  if (eorr) {
    console.log(eorr);
  }
});
