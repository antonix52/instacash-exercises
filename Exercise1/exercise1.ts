function getPairValues(array: number[], size: number, sumValue: number) {
    let arrayMap: Map<number, number>
    let i: number;
    i = 0;
    
    for (let value of array) {
        if (arrayMap.has(sumValue - value)) {
            return [arrayMap.get(value), i]
        }
        arrayMap.set(value, i);
        i++;
    }
    return [];  
}

let arrayInput = [2, 5, 8, 14, 0, 11];

let sumValue = 13;

let result = getPairValues(arrayInput, arrayInput.length, sumValue);

if (result.length === 0) {
    console.log('The pair values is ' + arrayInput[result[0]] + ' and ' + arrayInput[result[1]]);
} else {
    console.log('Pair not found')
}