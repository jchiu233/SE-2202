// Create a template object (prototype) for a 2D point
let PointPrototype = {
    // default coordinates
    x: 0,
    y: 0,

    // print method
    print: function() {
        console.log("(" + this.x + ", " + this.y + ")");
    }
};

// Function that creates a point object using the prototype
function createPoint(x, y) {
    // create a new object linked to PointPrototype
    let point = Object.create(PointPrototype);
    point.x = x;
    point.y = y;
    return point;
}

// test the prototype-based objects
// do not change
let p1 = createPoint(3, 4);
p1.print(); // (3, 4)
p1 = createPoint(10, 15);
p1.print(); // (10, 15)
p1 = createPoint(-2, 8);
p1.print(); // (-2, 8)

// Now create a constructor function version
function Point(x, y) {
    this.x = x;
    this.y = y;

    this.print = function() {
        console.log("(" + this.x + ", " + this.y + ")");
    };
}

/* Test creating objects with the constructor Point.
   Do not change the print statements */
let p2 = new Point(3, 4);
p2.print(); // (3, 4)
p2 = new Point(10, 15);
p2.print(); // (10, 15)
p2 = new Point(-2, 8);
p2.print(); // (-2, 8)
