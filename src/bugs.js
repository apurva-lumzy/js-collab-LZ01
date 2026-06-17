// bugs.js — small helpers used across the app.
// NOTE: three of these do not behave the way their names promise.

// Should return the NUMERIC sum of two values that arrive from form fields.
function addInputs(a, b) {
  // why: the + operator concatenates as strings also; we must explicitly convert string into numbers.
  return Number(a) + Number(b);
}

// Should build an array of n functions where the k-th function returns k.
function makeCounters(n) {
  //why: A variable defined using "var" have same value across repetitive declarations.
  let fns = [];
  for (let i = 0; i < n; i++) {
    fns.push(function () { return i; });
  }
  return fns;
}

// Should return a NEW array with `item` appended, leaving the original intact.
function withItem(arr, item) {
  arr.push(item);
  return arr;
}

module.exports = { addInputs: addInputs, makeCounters: makeCounters, withItem: withItem };
