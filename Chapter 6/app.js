// Chapter 6 (Math Expression II)
// 1. Code a short form of x = x + 1; Use either of the two legal
// expressions.

x++;
x+=1;

// 2. If x has a value of 100, what is the fastest way to reduce it to 99
// with a math expression?

x= x-1;
x=-1;

// 3. var x = 50;
// var y = x++;
// What is the value of y?
51
// 4. var y = 50;
// var z = --y;
// What is the value of z?
49
// 5. In a single statement, decrement num and assign its original value
// to newNum.
var newNum = num--;
// 6. In a single statement add 1 to a variable and assign its original
// value to another variable.
// 7. Assign a number value to a variable.
// Increment the variable.
// Display the new value in an alert

var originalVar = 5;
var newVar = originalVar += 1;

var number = 10;
number++;
alert("The new value is: " + number);