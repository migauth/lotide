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

* `head`: The head function returns the first element of an array.
* `tail`: The tail function returns all but the first element of an array.
* `middle`: The middle function returns the middle value in an array. Will return the middle value of an odd array, and 2 middle values in an even array.
* `assertArraysEqual`: The assertArraysEqual function checks if two arrays arrays match. It will return an assertion passed message if the arrays are the same, and a fail message if they are not.
* `assertEqual`: The assertEqual function takes two parameters and compares them. It will return an assertion passed message if the arguments are the same, and a fail message if they are not.

* `assertObjectsEqual`:
* `countLetters`:
* `countOnly`:
* `eqArrays`:
* `eqObjects`:
* `findKey`:
* `findKeyByValue`:
* `flatten`:
* `letterPositions`:
* `takeUntil`:
* `without`:
