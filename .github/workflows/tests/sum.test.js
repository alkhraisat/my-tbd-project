// sum.js - the main file where you define the function
function sum(a, b) {
  return a + b;
}
module.exports = sum;

// sum.test.js - the test file
const sum = require('../sum');  // Make sure this is required only once, and not re-declared

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
