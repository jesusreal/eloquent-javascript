"use strict";

// (function() {
var methodsToSpyOn = {};

function min(num1, num2) {
    if (num1 < num2) {
        return num1;
    } else {
        return num2;
    }
}

function recursion(num) {
    // if (num<0) {
    //     num = -num;
    // }
    if (num === 0) {
        return "even";
    } else if (num === 1) {
        return "odd";
    } else if (num < 0) {
        return recursion(-num);
    } else {
        return recursion(num - 2);
    }
}

function countBs(str) {
    var counter = 0;
    var index = 0;
    while (index < str.length) {
        if (str.charAt(index) === "B") {
            counter += 1;
        }
        index += 1;
    }
    return counter;
}

function countChar(str, char) {
    var counter = 0;
    var index = 0;
    while (index < str.length) {
        if (str.charAt(index) === char) {
            counter += 1;
        }
        index += 1;
    }
    return counter;
}
methodsToSpyOn.countChar = countChar;

function countBsNew(str) {
    var totalBs = methodsToSpyOn.countChar(str, 'B');
    return totalBs;
}
// })();