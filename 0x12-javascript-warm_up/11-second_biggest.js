#!/usr/bin/node
function secondBiggest (args) {
  if (args.length <= 1) {
    return 0;
  }
  let max = parseInt(args[0]);
  let secondMax = parseInt(args[1]);

  if (secondMax > max) {
    [max, secondMax] = [secondMax, max];
  }

  for (let i = 2; i < args.length; i++) {
    let num = parseInt(args[i]);

    if (num > max) {
      secondMax = max;
      max = num;
    } else if (num > secondMax) {
      secondMax = num;
    }
  }
  return secondMax;
}

const args = process.argv.slice(2);
const secondBiggestNum = secondBiggest(args);

console.log(secondBiggestNum);
