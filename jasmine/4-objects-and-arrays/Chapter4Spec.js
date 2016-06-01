'use strict';

describe('Exercise 1', function () {
    var scope = new Chapter4().exercise1;

    describe('range()', function () {
        it('should return an array from 1 to 5', function () {
            var result = scope.range(1, 5);
            var expectedResult = [1, 2, 3, 4, 5];
            expect(result).toEqual(expectedResult);
        });

        it('should return an array from -2 to 2', function () {
            var result = scope.range(-2, 2);
            var expectedResult = [-2, -1, 0, 1, 2];
            expect(result).toEqual(expectedResult);
        });

        it('should return an array from 5 to 1', function () {
            var result = scope.range(5, 1, -1);
            var expectedResult = [5, 4, 3, 2, 1];
            expect(result).toEqual(expectedResult);
        });

        it('should return an array from 2 to -2', function () {
            var result = scope.range(2, -2, -1);
            var expectedResult = [2, 1, 0, -1, -2];
            expect(result).toEqual(expectedResult);
        });

        it('should return an array from 1 to 10 with step 3', function () {
            var result = scope.range(1, 10, 3);
            var expectedResult = [1, 4, 7, 10];
            expect(result).toEqual(expectedResult);
        });

        it('should return an array from 1 to 9 with step 3', function () {
            var result = scope.range(1, 9, 3);
            var expectedResult = [1, 4, 7];
            expect(result).toEqual(expectedResult);
        });

        it('should return an array from 10 to 1 with step -3', function () {
            var result = scope.range(10, 1, -3);
            var expectedResult = [10, 7, 4, 1];
            expect(result).toEqual(expectedResult);
        });
    });

    describe('sum', function () {
        it('should return the sum of values from 1 to 5', function () {
            var result = scope.sum([1, 2, 3, 4, 5]);
            expect(result).toBe(15);
        });
    });

    describe('jsumForRangeStartingByOne', function () {
        it('should return the sum of values from 1 to 5', function () {
            var input = [1, 2, 3, 4, 5];
            var lastInputValue = input[input.length - 1];
            var result = scope.jsumForRangeStartingByOne(lastInputValue);
            expect(result).toBe(15);
        });

        it('should return the sum of values when range does not start with 1', function () {
            var input = [2, 3, 4, 5];
            var lastInputValue = input[input.length - 1];
            var result = scope.jsumForRangeStartingByOne(lastInputValue);
            expect(result).not.toBe(14);
        });
    });

    describe('jsumForRange', function () {
        beforeEach(function () {
            spyOn(scope, 'range');
            spyOn(scope, 'sum');
            spyOn(scope, 'jsumForRangeStartingByOne');
        });

        it('should return the sum of values from 1 to 5', function () {
            var input = [1, 2, 3, 4, 5];
            var lastInputValue = input[input.length - 1];
            var expectedResult = 15;
            var result;
            scope.jsumForRangeStartingByOne.and.returnValue(expectedResult);
            result = scope.jsumForRange(input);
            expect(scope.jsumForRangeStartingByOne).toHaveBeenCalledWith(lastInputValue);
            expect(result).toBe(expectedResult);
        });

        it('should return the sum of values from 1 to 5', function () {
            var input = [5, 6, 7, 8, 9, 10];
            var inputValues = {
                "first": input[0],
                "last": input[input.length - 1]
            };
            var expectedResult = 45;
            var result;
            scope.jsumForRangeStartingByOne.and.returnValue(55);
            scope.range.and.returnValue([1, 2, 3, 4]);
            scope.sum.and.returnValue(10);
            result = scope.jsumForRange(input);
            expect(scope.jsumForRangeStartingByOne).toHaveBeenCalledWith(inputValues.last);
            expect(scope.range).toHaveBeenCalledWith(1, inputValues.first - 1);
            expect(scope.sum).toHaveBeenCalledWith([1, 2, 3, 4]);
            expect(result).toBe(expectedResult);
        });
    });
});



describe('Exercise 2', function () {
    var scope = new Chapter4().exercise2;
    var array, arrayReversed, copyOfArray;
    beforeEach(function () {
        array = [1, 4, 5, 7, 21];
        copyOfArray = [1, 4, 5, 7, 21];
        arrayReversed = [21, 7, 5, 4, 1];
    });

    it('should return a new array which is the input array reversed', function () {
        var result = scope.reverseArray(array);
        expect(array).toEqual(copyOfArray);
        expect(result).toEqual(arrayReversed);
    });

    it('should reverse imput array (modifies it)', function () {
        var result = scope.reverseArrayInPlace(array);
        expect(result).toBe(undefined);
        expect(array).toEqual(arrayReversed);
    });
});



describe('Exercise 3', function () {
    var scope = new Chapter4().exercise3;
    var getBaseObj = function getBaseObj() {
        return {
            value: 1,
            rest: {
                value: 2,
                rest: {
                    value: 3,
                    rest: null
                }
            }
        };
    };

    it('should convert an array to a list', function () {
        var expectedResult = getBaseObj();
        var result = scope.arrayToList([1, 2, 3]);
        expect(result).toEqual(expectedResult);
    });

    it('should convert a list to an array', function () {
        var list = getBaseObj();
        var expectedResult = [1, 2, 3];
        var result = scope.listToArray(list);
        expect(result).toEqual(expectedResult);
    });

    it('should prepend an element to the list', function () {
        var list = getBaseObj();
        var expectedResult = {
            value: 0,
            rest: getBaseObj()
        };
        var result = scope.prepend(0, list);
        expect(result).toEqual(expectedResult);
    });

    it('should return the 2nd element of a list', function () {
        var list = getBaseObj();
        var result = scope.nth(list, 2);
        expect(result).toBe(2);
    });

    it('should return undefined when asking for an element out of the list', function () {
        var list = getBaseObj();
        var result = scope.nthNotRecursive(list, 6);
        expect(result).toBeUndefined();
    });

    it('should return undefined when asking for an element out of the list', function () {
        var list = getBaseObj();
        var result = scope.nth(list, 6);
        expect(result).toBeUndefined();
    });



    describe('Exercise 4', function () {
        var scope = new Chapter4().exercise4;
        var getBaseObj = function getBaseObj() {
            return {
                value: 1,
                rest: {
                    value: 2,
                    rest: {
                        value: 3,
                        rest: null
                    }
                }
            };
        };

        it('should return true when both values are null', function () {
            var result = scope.deepComparison(null, null);
            expect(result).toBe(true);
        });

        it('should return true when comparing empty objects', function () {
            var result = scope.deepComparison({}, {});
            expect(result).toBe(true);
        });

        it('should return true when comparing the same object', function () {
            var list1 = getBaseObj();
            var list2 = list1;
            var result = scope.deepComparison(list1, list2);
            expect(result).toBe(true);
        });

        it('should return true when comparing objects with the same properties and values', function () {
            var list1 = getBaseObj();
            var list2 = getBaseObj();
            var result = scope.deepComparison(list1, list2);
            expect(result).toBe(true);
        });

        it('should return true when comparing identical values', function () {
            var result = scope.deepComparison(5, 5);
            expect(result).toBe(true);
        });

        it('should return false when one value is null and the other is another object', function () {
            var result = scope.deepComparison(null, { "key": "value" });
            expect(result).toBe(false);
        });

        it('should return false when any of the values is false', function () {
            var result = scope.deepComparison(null, 3);
            expect(result).toBe(false);
        });

        it('should return false when comparing objects with same values but different property names', function () {
            var list1 = getBaseObj();
            var list2 = getBaseObj();
            list2.rest.rest.otherProperty = list2.rest.rest.value;
            delete list2.rest.rest.value;
            var result = scope.deepComparison(list1, list2);
            expect(result).toBe(false);
        });

        it('should return false when comparing objects with diferent property values', function () {
            var list1 = getBaseObj();
            var list2 = getBaseObj();
            list2.rest.rest.value = 4444;
            var result = scope.deepComparison(list1, list2);
            expect(result).toBe(false);
        });

        it('should return false when a property is undefined in one object and is not in the other', function () {
            var list1 = getBaseObj();
            list1.rest.rest.value = undefined;
            var list2 = getBaseObj();
            delete list2.rest.rest.value;
            var result = scope.deepComparison(list1, list2);
            expect(result).toBe(false);
        });

        it('should return false when first object has additional properties', function () {
            var list1 = getBaseObj();
            var list2 = getBaseObj();
            list1.additionalProperty = "additionalValue";
            var result = scope.deepComparison(list1, list2);
            expect(result).toBe(false);
        });

        it('should return false when second object has additional properties', function () {
            var list1 = getBaseObj();
            var list2 = getBaseObj();
            list2.additionalProperty = "additionalValue";
            var result = scope.deepComparison(list1, list2);
            expect(result).toBe(false);
        });

        it('should return false when comparing to non-identical values', function () {
            var result = scope.deepComparison(5, "5");
            expect(result).toBe(false);
        });
    });
});