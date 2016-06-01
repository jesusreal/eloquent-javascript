var assert = require('assert');
var ch5 = require('./chapter5Src');
console.log(assert);
// console.log("Flatten method", ch5.flattenArray);

describe('Chapter 5 - Higher-order Functions', () => {
  describe('returns the same array when it is flat', () => {
    it('sets properties x and y via constructor', () => {
      var inputArray = [1, 2, 3];
      var outputArray = [1, 2, 3];
      assert.deepEqual(outputArray, ch5.flattenArray(inputArray));
    });

    it('returns flattened array from array of arrays', () => {
      var inputArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
      var outputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      assert.deepEqual(outputArray, ch5.flattenArray(inputArray));
    });
  });
});