# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@migauth/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: Returns the first element of an array.
* `tail(array)`: Returns all but the first element of an array.
* `middle(array)`: Returns the middle value in an array. Will return the middle value of an odd array, and 2 middle values in an even array.
* `assertArraysEqual(actual, expected)`: Checks if two arrays arrays match. It will return an assertion passed message if the arrays are the same, and a fail message if they are not.
* `assertEqual(actual, expected)`: Takes two parameters and compares them. It will return an assertion passed message if the arguments are the same, and a fail message if they are not.
* `assertObjectsEqual(actual, expected)`: Takes two object properties and compares them. It will return an assertion passed message if the properties are the same, and a fail message if they are not.
* `countLetters("sentence")`: Takes a string parameter and returns an object with all letters as keys with the number of times the letter occurs as a value.
* `countOnly(allItems, itemsToCount)`: Returns how many of a listed value is included in an array. Will only count if asked to - with boolean value in object, ei { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }.
* `eqArrays(array1, array2)`: Checks if two argument arrays match. It will return an assertion passed message if the arguments are the same, and a fail message if they are not.
* `eqObjects(object1, object2)`: Compares two objects. Will return true if they are the same, and false if they are not.
* `findKey(object, callback)`: Scans the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
* `findKeyByValue(object, value)`: Scans the object and return the value of the key that matches. If no key is found, then it should return undefined.
* `flatten(array)`: Will take an array with nested arrays (one level deep) and flatten them into a single array with one layer.
* `letterPositions("string")`: Returns an object with keys of each letter, and an array with the indices of each occuring letter as a value.
* `takeUntil(array, callback)`: Takes an array as the first parameter and returns a new array up to where the callback specifies
* `without(array, itemsToRemove)`: Takes an array as the first parameter and returns a new array without the specified value in the second parameter
