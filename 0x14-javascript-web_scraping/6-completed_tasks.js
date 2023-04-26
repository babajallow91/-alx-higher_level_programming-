#!/usr/bin/node

const request = require('request');
const endpoint = process.argv[2];

request.get(endpoint, { json: true }, (eorr, response, body) => {
  if (eorr) {
    console.log(eorr);
    return;
  }

  const tasksCompleted = {};
  body.forEach((todo) => {
    if (todo.completed) {
      if (!tasksCompleted[todo.userId]) {
        tasksCompleted[todo.userId] = 1;
      } else {
        tasksCompleted[todo.userId] += 1;
      }
    }
  });
  console.log(tasksCompleted);
});
