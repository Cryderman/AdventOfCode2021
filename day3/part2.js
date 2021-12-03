const fs = require('fs')

const input = fs.readFileSync('input.txt', 'utf8')
    .split('\n')

const initialReducerVal = array => [...Array(array[0].length)]
    .map(() => ({o: 0, z: 0}))


const getCommonBits = array => array
    .reduce((acc, cur) => cur
        .split('')
        .map((bit, idx) => {
            const {o, z} = acc[idx]
            const isOne = +bit === 1
            return {
                o: o + (isOne ? 1 : 0),
                z: z + (!isOne ? 1 : 0)
            }
        }), initialReducerVal(array))


const getOGBit = ({o, z}) => {
    if (+o === +z) {
        return 1
    } else {
        return o > z ? 1 : 0
    }
}
const getCo2Bit = ({o, z}) => {
    if (o === z) {
        return 0
    } else {
        return o > z ? 0 : 1
    }
}

const getRating = (inputs, getBitFn, idx = 0) => {
    const bits = getCommonBits(inputs)
    const bit = getBitFn(bits[idx])
    const result = inputs.filter((input) => +input[idx] === +bit)
    return result.length === 1 ? result : getRating(result, getBitFn, idx + 1)
}

const ox = parseInt(getRating(input, getOGBit), 2)
const co2 = parseInt(getRating(input, getCo2Bit), 2)
console.log(ox * co2)