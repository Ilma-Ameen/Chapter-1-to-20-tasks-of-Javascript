//------------Chapter no 14

// Code an if statement enclosing a nested if. If password is not
// empty, then check if password is not greater than 5 , then display
// an alert that says "Password must be greater than 5" if greater
// than 5 then Alert "OK".
var password = "password123";

if (password !== "") {
  if (password.length <= 5) {
    alert("Password must be greater than 5");
  } else {
    alert("OK");
  }
}


// 2. Try this statement by yourself
// if (a === 1) {
// if (c === "Max") {
//  alert("OK");
//  }
// }
if (a === 1) {
    if (c === "Max") {
      alert("OK");
    }
  }

// 3. Code the first line of an if statement that avoids the nesting above
// by testing for multiple conditions.
// if (a === 1) {
//  if (c === "Max") {
// alert("OK");
//  }
// }
if (a === 1) {
    if (c === "Max") {
      alert("OK");
    }
  }
  
// 4. Declare two variables and assign them the same number value.
// Test two conditions, using nested if statements. Test whether the
// first variable equals the second variable and also whether it is less
// than or equal to the second variable. If the test passes—and it
// will—display an alert message.
var num1 = 5;
var num2 = 5;

if (num1 === num2 && num1 <= num2) {
  alert("Test passed");
}







