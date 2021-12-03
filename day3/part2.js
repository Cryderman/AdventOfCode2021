const fs = require('fs')

input = fs.readFileSync('input1.txt', 'utf8')
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

const getOgRating = (inputs, idx = 0) => {
    const bits = getCommonBits(inputs)
    const bit = getOGBit(bits[idx])
    let result = inputs.filter((input) => +input[idx] === +bit)
    return result.length === 1 ? result : getOgRating(result, idx + 1)
}

const getCo2Rating = (inputs, idx = 0) => {
    const bits = getCommonBits(inputs)
    const bit = getCo2Bit(bits[idx])
    let result = inputs.filter((input) => +input[idx] === +bit)
    return result.length === 1 ? result : getCo2Rating(result, idx + 1)
}

const ox = parseInt(getOgRating(input), 2)
const co2 = parseInt(getCo2Rating(input), 2)
console.log(ox * co2)