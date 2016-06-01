'use strict';

// Looping a triangle
function triangleLoop() {
    for (var str = "#"; str.length < 8; str += '#') {
        console.log(str);
    }return str;
}

// FizzBuzz
var FizzBuzz = function FizzBuzz(num) {
    if (typeof num !== 'number') return new Error('Input parameter should be an instance of \'Num\'');
    var result = "";
    if (num % 3 === 0) result += 'Fizz';
    if (num % 5 === 0) result += 'Buzz';
    console.log(result);
    if (!result) {
        result = num;
    }
    return result;
};