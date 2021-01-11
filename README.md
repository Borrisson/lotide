# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @borrisson/lotide`

**Require it:**

`const _ = require('@borrisson/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `_.head([1,2,3])` : Will return the element at index 0 of an Array. ==> 1.
* `_.tail([1,2,3])` : Will return an array with all the elements within the Array except for the element at index 0 ==> [2,3]
* `_.middle([1,2,3,4])` : Will return an array with the middle element(s). If the array is even it will return the two most middle elements. ==> [2,3]
* `_.assertArraysEqual([1,2,3,4], [1,2,3,4])` : Will return an assertion for wether or not the arrays are equal. ==> ✅✅✅ Assertion Passed: ${[1,2,3,4]} === ${[1,2,3,4]}
* `_.countLetters('my name')` : Will return a number equal to the number of characters(excluding whitespaces) in the string provided. ==> 6
* `_.countOnly(['Jason', 'Karima'], { "Jason": true, "Karima": false, "Fang": true })` : Will return an object of all the occurances of strings that pass the test(provided as an object). ==> { 'Jason' : 1 }
* `_.eqArrays([1,2,3], [1,2,3,4])` : Will return a boolean for wether or not the arrays are equal. ==> false
* `_.eqObjects({ a: 1, b: [2] }, { a: 1, b: [2] })` : Will return a boolean for wether or not the objects are equal. ==> true
* `_.findKey({ a: 1, b: 2 }, (x) => x === 2)` : Will return the key that matches the callback function test. ==> 'b'
* `_.findKeyByValue({ a: 3, b: 4 }, 4)` : Will return the key that matches the search value provided. ==> 'b'
* `_.flatten([1, 2, [[3], 4], 5, [[6]]])` : Will return a flatten array no matter the ammount of nested arrays within it. ==> [1, 2, 3, 4, 5, 6]
* `_.letterPositions('hello')` : Will return an object with the characters as keys provided as a string in the function parameter. The keys hold an array with all of the character positions within the string provided. ==> { e:[1], h:[0], l: [2,3] o:[4] }
* `_.map([ 'word', 'anotherWord' ], (x) => x[0])` : Will return an array with the results returned by the callback function provided. ==> ['w', 'a'] 
* `_.takeUntil([1,2,3,4,5]`, (x) => x === 3) : Will return the all of the elements before the callback function holds true. [1,2]
* `_.without([1,2,3], 3)` : Will return an Array without the element provided in the second paramater(assuming it exists within the array). ==> [1,2]
* `_.assertEqual('abc', 'abc')` : Will compare primitive types only and will return an assertion. ==> ✅✅✅ Assertion Passed: ${'abc'} === ${'abc'}
* `_.assertObjectsEqual({ a: [1,2,3], b: { c: 'd' } }, { a: [1,2,3], b: { c: 'd' } })` : Will compare the objects and return an assertion of true or false. ==> ✅✅✅ Assertion Passed: ${{ a: [1,2,3], b: { c: 'd' } }} === ${{ a: [1,2,3], b: { c: 'd' } }}