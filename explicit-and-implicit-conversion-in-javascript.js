/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = "5" - 2;
console.log("The result is: " + result); // The result is 3 because JavaScript implicitly converts the string "5" to a number for the subtraction operation. No corrective action is needed here. 

let isValid = Boolean("false");
if (isValid === true) {
    console.log("This is valid!");// This will log "This is valid!" because the string "false" is truthy. To fix this, we can explicitly convert the string to a boolean using a comparison.
} else{
    console.log("This is not valid!"); // This will log "This is not valid!" because the string "false" is falsy.
}

let age = Number("25"); // Explicitly converting the string "25" to a number using Number() to ensure age is treated as a number.
let totalAge = age + 5;
console.log("Total Age: " + totalAge);
 

//Part 2: Write Your Own Examples

let height = String(170);
console.log("Your height is: " + height + " cm"); // Implicit conversion: JavaScript converts the number 170 to a string for concatenation.S

let tallenoughToRide = false; 
if (tallenoughToRide) {
    console.log("You are tall enough to ride!");
} else {
   console.log("You are not tall enough to ride!"); // This will log "You are not tall enough to ride!" because the boolean value false is falsy.
}
