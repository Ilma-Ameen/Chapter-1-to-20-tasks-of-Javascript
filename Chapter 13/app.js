// Chapter 13 (Testing sets of
// conditions)


// 1. Code the first line of an if statement that tests whether both are
// true: a has the same value as b and c has the same value as d.
if (a === b && c === d) {
    // Code block
  }
  
// 2. Code the first line of an if statement that tests whether either or
// both are true: a has the same value as b or c doesn't have the
// same value as d.
if (a === b || c !== d) {
    // Code block
  }
  
// 3. Code the first line of an if statement that tests whether
// I. name is either "Hamza" or "Arsalan".
// II. age is Less than 60.
if ((name === "Hamza" || name === "Arsalan") && age < 60) {
    // Code block
}
  
// 4. Declare two variables and assign them number values.
// If the first variable is less than the second variable or greater than
// the second variable, display an alert.
var num1 = 5;
var num2 = 10;

if (num1 < num2 || num1 > num2) {
  alert("Comparison passed");
}

// 5. Declare 2 variables. Assign one of them your first name and the
// other one your last name.
// Code 2 prompts, asking for your first and your last name.
// If your answers match the two variables, display an alert.
var firstName = "John";
var lastName = "Doe";

var userInputFirstName = prompt("Enter your first name");
var userInputLastName = prompt("Enter your last name");

if (userInputFirstName === firstName && userInputLastName === lastName) {
  alert("Name matches!");
}