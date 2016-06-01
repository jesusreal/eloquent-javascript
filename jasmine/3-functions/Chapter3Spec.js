'use strict';

describe('Eloquent JavaScript. Part 1. Chapter 3', function () {

    describe('min()', function () {
        var result;

        beforeEach(function () {
            result = null;
        });

        it('should return 3', function () {
            result = min(3, 8);
            expect(result).toBe(3);
        });

        it('should return -1', function () {
            result = min(3, -1);
            expect(result).toBe(-1);
        });

        it('should return 1.7', function () {
            result = min(1.7, 2.8);
            expect(result).toBe(1.7);
        });
    });


    describe('recursion()', function () {
        var result;

        beforeEach(function () {
            result = null;
        });

        it('should return even for 50', function () {
            result = recursion(50);
            expect(result).toBe("even");
        });

        it('should return even for 0', function () {
            result = recursion(0);
            expect(result).toBe("even");
        });

        it('should return odd for 75', function () {
            result = recursion(75);
            expect(result).toBe("odd");
        });

        it('should return odd for 1', function () {
            result = recursion(1);
            expect(result).toBe("odd");
        });

        it('should return odd for -1', function () {
            result = recursion(-1);
            expect(result).toBe("odd");
        });

        it('should return even for -32', function () {
            result = recursion(-32);
            expect(result).toBe("even");
        });
    });


    describe('countBs', function () {
        var testStr, result;

        beforeEach(function () {
            testStr = result = null;
        });

        it('should return 0', function () {
            testStr = "bebebe";
            result = countBs(testStr);
            expect(result).toBe(0);
        });

        it('should return 1', function () {
            testStr = "beBebe";
            result = countBs(testStr);
            expect(result).toBe(1);
        });

        it('should return 2', function () {
            testStr = "BebeBe";
            result = countBs(testStr);
            expect(result).toBe(2);
        });

        it('should return 5', function () {
            testStr = "BeBebeBeBebeBe";
            result = countBs(testStr);
            expect(result).toBe(5);
        });
    });


    describe('countChar', function () {
        var testStr, result;
        var char = 'S';

        beforeEach(function () {
            testStr = result = null;
        });

        it('should return 0', function () {
            testStr = "bebebe";
            result = countChar(testStr, char);
            expect(result).toBe(0);
        });

        it('should return 1', function () {
            testStr = "beSebe";
            result = countChar(testStr, char);
            expect(result).toBe(1);
        });

        it('should return 2', function () {
            testStr = "SebeSe";
            result = countChar(testStr, char);
            expect(result).toBe(2);
        });

        it('should return 5', function () {
            testStr = "SeSebeSeSebeSe";
            result = countChar(testStr, char);
            expect(result).toBe(5);
        });
    });


    describe('countBsNew', function () {
        var result;
        var expectedResult = 'totalBs';
        var testStr = "test";

        beforeEach(function () {
            spyOn(methodsToSpyOn, 'countChar').and.returnValue(expectedResult);
            result = null;
        });

        it('should return 0', function () {
            result = countBsNew(testStr);
            expect(methodsToSpyOn.countChar).toHaveBeenCalledWith(testStr, 'B');
            expect(result).toBe(expectedResult);
        });

        it('should return 1', function () {
            result = countBsNew(testStr);
            expect(methodsToSpyOn.countChar).toHaveBeenCalledWith(testStr, 'B');
            expect(result).toBe(expectedResult);
        });

        it('should return 2', function () {
            result = countBsNew(testStr);
            expect(methodsToSpyOn.countChar).toHaveBeenCalledWith(testStr, 'B');
            expect(result).toBe(expectedResult);
        });

        it('should return 5', function () {
            result = countBsNew(testStr);
            expect(methodsToSpyOn.countChar).toHaveBeenCalledWith(testStr, 'B');
            expect(result).toBe(expectedResult);
        });
    });
});