function getPairValues(array: Array<number>, size: number, sumValue: number)
{
    let arrayMap = new Map()
    var i = 0
    
    for (let value of array) {
        if (arrayMap.has(sumValue - value)) {
            return [arrayMap.get(sumValue - value), i]
        }
        arrayMap.set(value, i);
        i++
    }
    return []
}

let arrayInput = [2, 5, 8, 14, 0, 11]

let sumValue = 13

let result = getPairValues(arrayInput, arrayInput.length, sumValue)

if (result.length !== 0) {
    console.log('The pair values is ' + arrayInput[result[0]] + ' and ' + arrayInput[result[1]])
} else {
    console.log('Pair not found')
}