/*
The goal of this exercise is to practice working with different data types, 
and understand conversions and basic comparison.
*/

// remember that strings go in quotes
let ageString = "17"; // set age to "18"

// lets try again as a number
let age = 17; // set age to 18

// use a comparison (< or >) to determine if age is at least 18
// note the variable type
let isAdult = age >= 18; // true if 18 or older, false otherwise

// change the following line so "something" is undefined
let something; // stays undefined unless you assign a value

// change the following line so "nothing" is null
// note the type!
let nothing = null;

console.log(ageString);        // 18
console.log(typeof ageString); // string

console.log(age);              // 18
console.log(typeof age);       // number

console.log(isAdult);          // true (because age = 18)
console.log(typeof isAdult);   // boolean

console.log(something);        // undefined
console.log(typeof something); // undefined

console.log(nothing);          // null
console.log(typeof nothing);   // object

