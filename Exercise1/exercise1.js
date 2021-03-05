"use strict";
function getPairValues(array, size, sumValue) {
    var arrayMap = new Map();
    var i = 0;
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var value = array_1[_i];
        if (arrayMap.has(sumValue - value)) {
            return [arrayMap.get(sumValue - value), i];
        }
        arrayMap.set(value, i);
        i++;
    }
    return [];
}
var arrayInput = [2, 5, 8, 14, 0, 11];
var sumValue = 13;
var result = getPairValues(arrayInput, arrayInput.length, sumValue);
if (result.length !== 0) {
    console.log('The pair values is ' + arrayInput[result[0]] + ' and ' + arrayInput[result[1]]);
}
else {
    console.log('Pair not found');
}
