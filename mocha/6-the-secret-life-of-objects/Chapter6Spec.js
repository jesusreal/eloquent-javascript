var assert = require('assert');
var Vector = require('./chapter6Src')
console.log(assert);
// var should = require('should');


describe('Vector', () => {
  describe('Constructor', () => {
    it('sets properties x and y via constructor', () => {
      var vector = new Vector(5, 7);
      assert.equal(5, vector.x);
      assert.equal(7, vector.y);
    });

    it('converts properties x and y to Number on instantiation', () => {
      var vector = new Vector("5", "7");
      assert.strictEqual(5, vector.x);
      assert.strictEqual(7, vector.y);
    });
  });

  describe('Plus an minus methods', () => {
    it('returns the sum of two vectors dimensions', () => {
      var vector = new Vector("5", "7");
      var newVector = new Vector(1, 3);
      var sumVector = vector.plus(newVector);
      assert.equal(6, sumVector.x);
      assert.equal(10, sumVector.y);
    });

    it('returns the difference of two vectors dimensions', () => {
      var vector = new Vector("5", "7");
      var newVector = new Vector(1, 2);
      var differenceVector = vector.minus(newVector);
      assert.equal(4, differenceVector.x);
      assert.equal(5, differenceVector.y);
    });
  });

  describe('Length from (0,0)', function () {
    it('is correctly calculated for x and y greater than 0', function () {
      var vector = new Vector(5, 7);
      assert.equal(8.60, vector.length());
    });

    it('is correctly calculated for x and y lower than 0', function () {
      var vector = new Vector(-5,-2);
      assert.equal(5.39, vector.length());
    });

  });
});