// index.js
const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const without = require('./without');
const assertObjectsEqual = require('./assertObjectsEqual');
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const takeUntil = require('./takeUntil');
const map = require('./map');
const letterPositions = require('./letterPositions');
const flatten = require('./flatten');
const findKeyByValue = require('./findKeyByValue');
const findKey = require('./findKey');
const eqObjects = require('./eqObjects');
const countOnly = require('./countOnly');
const countLetters = require('./countLetters');

module.exports = {
  head, 
  tail,
  middle,
  without,
  assertArraysEqual,
  assertObjectsEqual,
  eqArrays,
  assertEqual,
  takeUntil,
  map,
  letterPositions,
  flatten,
  findKeyByValue,
  findKey,
  eqObjects,
  countOnly,
  countLetters
};