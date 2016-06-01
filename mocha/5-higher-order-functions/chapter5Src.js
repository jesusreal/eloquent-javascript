function flattenArray (arrayOfArrays) {
  return arrayOfArrays.reduce((array, result) => {
      return array.concat(result);
    }, []);
}

function motherChildAgeDifference () {
  // forEach
    // getMotherAge();
    // getChildAge();

}

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

module.exports = {
  "flattenArray": flattenArray,
  "motherChildAgeDifference": motherChildAgeDifference
};