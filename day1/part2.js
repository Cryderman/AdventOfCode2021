const fs = require('fs')

array = fs.readFileSync('input5.txt', 'utf8').split('\n').map(i => +i);

const getValue = (array, idx) => {
    return array[idx] + (array[idx + 1] ?? 0) + (array[idx + 2] ?? 0)
}

const mapVals = array => array.map(
    (_, idx, arr) => getValue(arr, idx))

const getResult = vals => vals
    .reduce(
        (acc, cur, idx, arr) => cur > arr[idx - 1] ? acc + 1 : acc, 0)

const result = getResult(mapVals(array))
console.log(result)