'use strict';

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

function Chapter4() {}

var exercise1 = {
    range: function range(start, end, step) {
        var i;
        step = step || 1;

        var numbers = [];
        var temp;
        // also if(step > 0)
        if (start > end) {
            for (i = start; i >= end; i += step) {
                numbers.push(i);
            }
        } else {
            for (i = start; i <= end; i += step) {
                numbers.push(i);
            }
        }
        return numbers;
    },

    sum: function sum(values) {
        var sum = 0;
        values.forEach(function (value) {
            sum += value;
        });
        return sum;
    },

    jsumForRangeStartingByOne: function jsumForRangeStartingByOne(lastValue) {
        var sum;
        if (lastValue % 2 === 0) {
            sum = (lastValue + 1) * (lastValue / 2);
        } else {
            sum = lastValue * Math.ceil(lastValue / 2);
        }
        return sum;
    },

    jsumForRange: function jsumForRange(values) {
        var firstValue = values[0];
        var lastValue = values[values.length - 1];
        var sum = this.jsumForRangeStartingByOne(lastValue);
        var toSubstractFromSum = 0;
        if (firstValue > 1) {
            toSubstractFromSum = this.sum(this.range(1, firstValue - 1));
        }
        sum -= toSubstractFromSum;
        return sum;
    }
};

var exercise2 = {
    reverseArray: function reverseArray(array) {
        var newArray = [];
        array.forEach(function (elem) {
            newArray.unshift(elem);
        });
        return newArray;
    },
    reverseArrayInPlace: function reverseArrayInPlace(array) {
        array.forEach(function (elem, index) {
            array.splice(index, 1);
            array.unshift(elem);
        });
    }
};

var exercise3 = {
    arrayToList: function arrayToList(array) {
        var list = {};
        var nextList = {};
        array.forEach(function (value) {
            nextList = nextList.rest || list;
            nextList.value = value;
            nextList.rest = {};
        });
        nextList.rest = null;
        return list;
        // Solution from book
        // var list = null;
        // for (var i = array.length - 1; i >= 0; i--)
        //     list = {value: array[i], rest: list};
    },

    listToArray: function listToArray(list) {
        var array = [];
        while (list) {
            array.push(list.value);
            list = list.rest;
        }
        return array;
        // Solution from book
        // for (var node = list; node; node = node.rest)
        //   array.push(node.value);
    },

    prepend: function prepend(element, list) {
        return { value: element, rest: list };
    },

    nthNotRecursive: function nthNotRecursive(list, n) {
        for (var i = 1; i < n; i++) {
            list = list.rest;
            if (list === null) {
                return undefined;
            }
        }
        return list.value;
    },

    nth: function nth(list, n) {
        if (list === null) {
            return undefined;
        } else if (n > 1) {
            return this.nth(list.rest, n - 1);
        } else {
            return list.value;
        }
    }
};

var exercise4 = {
    deepComparison: function deepComparison(a, b) {
        if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) !== 'object' || (typeof b === 'undefined' ? 'undefined' : _typeof(b)) !== 'object' || a === null || b === null) {
            return a === b;
        } else {
            if (Object.keys(a).length !== Object.keys(b).length) {
                return false;
            }
            for (var key in a) {
                if (!(key in b) || !exercise4.deepComparison(a[key], b[key])) {
                    return false;
                }
            }
            return true;
        }
    }
};

Chapter4.prototype = {
    "exercise1": exercise1,
    "exercise2": exercise2,
    "exercise3": exercise3,
    "exercise4": exercise4
};