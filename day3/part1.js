const fs = require('fs')

array = fs.readFileSync('input1.txt', 'utf8')
    .split('\n')

const initialRecuderVal = [...Array(array[0].length)]
    .map(() => ({o: 0, z: 0}))
const commonBits = array
    .reduce((acc, cur) => cur
        .split('')
        .map((bit, idx) => {
            const {o, z} = acc[idx]
            const isOne = +bit === 1
            return {
                o: o + (isOne ? 1 : 0),
                z: z + (!isOne ? 1 : 0)
            }
        })
, initialRecuderVal)

const getGammaBit = ({o, z}) => o > z ? 1 : 0

const getEpsilonBit = ({o, z}) => o < z ? 1 : 0

const getGammaRate = () => commonBits.reduce((acc, cur) => `${acc}${getGammaBit(cur)}`, '')

const getEpsilonRate = () => commonBits.reduce((acc, cur) => `${acc}${getEpsilonBit(cur)}`, '')

const gammaRate = parseInt(getGammaRate(), 2)
const epsilonRate = parseInt(getEpsilonRate(), 2)

console.log(gammaRate * epsilonRate)
