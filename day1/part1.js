const fs = require('fs')

array = fs.readFileSync('input1.txt', 'utf8').split('\n').map(i => +i);

const result = array
    .reduce(
        (acc, cur, idx, arr) => cur > arr[idx - 1] ? acc + 1 : acc, 0)
console.log(result)