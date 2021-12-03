const fs = require('fs')

array = fs.readFileSync('input1.txt', 'utf8')
    .split('\n')

const toPairs = array => array.map((directions) => {
    return directions.split(' ')
})

const getPosition = (currentPosition, directions) => {
    const [direction, unitStr] = directions
    const unit = +unitStr
    let {x,y} = currentPosition
    switch (direction) {
        case 'forward':
            return {x: x + unit, y}
        case 'down':
            return {x, y: y + unit}
        case 'up':
            return {x, y: y - unit}
    }
}

let mapPairs = pairs => pairs
    .reduce((acc, cur) => getPosition(acc, cur), {x: 0, y: 0})

const {x, y} = mapPairs(toPairs(array))
const result = x * y
console.log(result)