'use strict';

describe('Eloquent JavaScript. Part 1. Chapter 2', function () {

    describe('Looping a triangle', function () {
        var expected = "#######";
        var actual = triangleLoop();

        it('should have the same length', function () {
            expect(actual.length).toEqual(expected.length + 1);
        });

        it('should be the same string', function () {
            expect(actual).toEqual(expected + '#');
        });
    });

    describe('FizzBuzz', function () {

        beforeAll(function () {
            jasmine.addMatchers(customMatchers);
        });

        it('should return an error', function () {
            expect(FizzBuzz('Invalid value')).toBeInstanceOf(Error);
        });
        it('should return the input number', function () {
            expect(FizzBuzz(29)).toBe(29);
        });
        it('should return Fizz', function () {
            expect(FizzBuzz(18)).toBe('Fizz');
        });
        it('should return Buzz', function () {
            expect(FizzBuzz(55)).toBe('Buzz');
        });
        it('should return FizzBuzz', function () {
            expect(FizzBuzz(30)).toBe('FizzBuzz');
        });
    });
});