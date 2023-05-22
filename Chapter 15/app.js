// Chapter 15 (Array I)
// 1. Declare an empty array.
var emptyArray = [];

// 2. Code an array with 1 string element
var arrayWithString = ["Hello"];

// 3. var alphabet = ["h","i","j","k"]. Now print the letter “j” in alert
// using array index
var alphabet = ["h", "i", "j", "k"];
alert(alphabet[2]); // Output: "j"

// 4. var alphabet=["h","i","j","k", “l”,”m”, “n”, “o”]. Find the total
// length of array.
var alphabet = ["h", "i", "j", "k", "l", "m", "n", "o"];
var arrayLength = alphabet.length;
console.log(arrayLength); // Output: 8

// 5. Declare an array with one element and Add a second element
// with index in array. Create an alert whose message is the new
// element.
var array = ["First Element"];
array[1] = "Second Element";
alert(array[1]); // Output: "Second Element"