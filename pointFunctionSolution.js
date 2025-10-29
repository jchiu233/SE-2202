function Point(x, y) {
    // Task 1: Define the point coordinates
    this.x = x;
    this.y = y;

    // Task 1: Print function (already expected in later tasks)
    this.print = function() {
        console.log("(" + this.x + ", " + this.y + ")");
    }

    // Midpoint method
    this.midpoint = function(p2) {
        let midX = (this.x + p2.x) / 2;
        let midY = (this.y + p2.y) / 2;
        return new Point(midX, midY);
    }

    // ScaleTo method
    this.scaleTo = function(p2, t) {
        // Formula for scaling from this point toward p2 by factor t:
        // newX = this.x + t * (p2.x - this.x)
        // newY = this.y + t * (p2.y - this.y)
        let newX = this.x + t * (p2.x - this.x);
        let newY = this.y + t * (p2.y - this.y);
        return new Point(newX, newY);
    }
}


/* Do not change the lines below */
let p1 = new Point(1,5)
let p2 = new Point(5,7)
p1.midpoint(p2).print()//expect (3, 6)
p2.midpoint(p1).print()//expect (3, 6)

let p3 = new Point(0,0)
let p4 = new Point(4,8)
p3.scaleTo(p4,0.25).print()// expect (1, 2)
p4.scaleTo(p3, 0.75).print() // expect (1, 2)
