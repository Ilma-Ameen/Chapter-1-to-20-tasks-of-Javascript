// Chapter 10 (if statments)
// 1. var city = "Karachi"
// if (city = "Karachi") {
// console.log("The City OF Lights")
// Correct the above statement:
// Also try this statement by yourself

var city = "Karachi"
if (city === "Karachi")
{
console.log("The City OF Lights");
}
else
{
    console.log("error");
}
// 2. This is the first line of an if statement:
// if (x === y) {
// Complete the statement. If the condition is true, display a box
// that asks the user value of z? and assign it to another variable.
if (x === y) 
{
    var z = prompt("Please enter the value of z:");
}
// 3. Code an if statement that tests if ZipCode is "10010" so, Alert
// that "Karachi". if not then alert ("Please write correct city")
var code = "10010";
if(code === "10010")
{
    alert("karachi");
}
else{
    alert("Please write correct city")
}

// 4. Code an if statement. Test whether a variable has a particular
// numerical value. If so, assign a new value to that variable, as in
// x = 1;
var x = 1;

if (x === 1) {
  x = 10; 
}