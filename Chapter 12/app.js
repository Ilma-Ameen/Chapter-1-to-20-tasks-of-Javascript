// Chapter 12 (if…else and else if
//   statements)
//   1. Code an if statement that tests whether the value represented by
//   a variable is greater than or equal to the value represented by
//   another variable. If so, display an alert. If not, display a different
//   alert.
if (var1 >= var2) {
    alert("Variable 1 is greater than or equal to Variable 2");
  } else {
    alert("Variable 1 is less than Variable 2");
  }
  //   2. Write a program using if else and else if statement which take
  //   marks from user. And the program will calculate your percentage
  //   and give you grade A/C to Your percentage. (MARKSHEET)
  var marks = parseFloat(prompt("Enter your marks:"));
  var percentage = (marks / totalMarks) * 100;
  
  if (percentage >= 90) {
    alert("Grade: A");
  } else if (percentage >= 80) {
    alert("Grade: B");
  } else if (percentage >= 70) {
    alert("Grade: C");
  } else if (percentage >= 60) {
    alert("Grade: D");
  } else {
    alert("Grade: F");
  }
  //   3. This is the if statement that begins the code.
  //   if (a === 10) {
  //    alert("a is 10");
  //   }
  //   If a isn't 10, display an alert that says The correct value of a is
  //   ____
  //   Note: Try this by yourself
  if (a === 10) {
    alert("a is 10");
  } else {
    alert("The correct value of a is " + a);
  }
  //   4. Prompt the user to enter a city.
  //   If the city is Karachi, display an alert acknowledging it is Karachi.
  //   If not, check to see if it's Lahore.
  //   If it is, display an alert acknowledging it's Lahore.
  //   Otherwise, display a different alert.
  var city = prompt("Enter a city:");
  
  if (city.toLowerCase() === "karachi") {
    alert("Acknowledging it is Karachi.");
  } else if (city.toLowerCase() === "lahore") {
    alert("Acknowledging it's Lahore.");
  } else {
    alert("City not recognized.");
  }