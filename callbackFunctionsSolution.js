let even_predicate = function (value) {
    // even if remainder when divided by 2 is 0
    return value % 2 === 0;
};

let odd_predicate = function (value) {
    // odd if remainder when divided by 2 is 1
    return value % 2 !== 0;
};

let undefined_predicate = function (value) {
    // strictly check for undefined
    return value === undefined;
};

let null_predicate = function (value) {
    // strictly check for null
    return value === null;
};

// higher-order function: applies a predicate to a value
let check = function (predicate, value) {
    return predicate(value);
};

// DO NOT CHANGE ORDER OF OUTPUT
console.log(check(even_predicate, 9));       // false
console.log(check(odd_predicate, 9));        // true
console.log(check(even_predicate, 8));       // true
console.log(check(odd_predicate, 8));        // false

let x;
console.log(check(undefined_predicate, x));  // true
console.log(check(null_predicate, x));       // false
