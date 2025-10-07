/* The ONLY changes you should make to this code
    are to assign a value to each case where the 
    variable "message" is declared. 

    See the comments on function calls and output 
    statements near the bottom for the desired output.
    Make sure you see all 4!
*/

// Global scope
var message = "hello world!"; //set to the correct string

function greetingFunction(saySomethingElse) {
  // Function scope
  var message = "hi!"; //set to the correct string
  console.log(message); 

  if (saySomethingElse) {
    // Block scope
    let message = "hello!"; //set to a string
    console.log(message); 
  }
}

//DO NOT change the next 3 lines
greetingFunction(); //Should return "hi!"
greetingFunction(true); //Should return "hi!" and "hello!" on separate lines
console.log(message); //Should return "hello world!"

if (true) {
    var message = "goodbye!"; //set to a string
}

//DO NOT change this line
console.log(message);  //should return "goodbye!"
