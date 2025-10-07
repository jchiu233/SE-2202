let counter = function (increment) {
    /*
        Uncomment the line that will correctly result in a separate (rather than shared) 
        counter if multiple counter functions are defined
    */
    let count = 0; // Each counter has its own independent count

    /*
        Create and return an inner function that receives a value increment
        and increments the value stored in count by increment.
    */
    return function() {
        count += increment;
        return count;
    };
};

// Create closures with different increments
let countByTwo = counter(2); // counter that adds 2 each call
let countByOne = counter(1); // counter that adds 1 each call

// DO NOT change the lines below
console.log(countByTwo()); // → 2
console.log(countByOne()); // → 1
console.log(countByTwo()); // → 4
console.log(countByOne()); // → 2
