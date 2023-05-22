// Chapter 16 (Array III)
// 1. var sizes = ["S", "M", "XL", "XXL", "XXXL"].
// Remove the first element of an array.
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.shift();

// 2. var sizes = ["S", "M", "XL", "XXL", "XXXL"].
// Add three number elements to the beginning of an array.
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.unshift(1, 2, 3);

// 3. Declare an array with one element.
// Add a second element to the beginning of the array.
// Create an alert whose message is the new first element.
var array = ["first"];
array.unshift("second");
alert(array[0]);

// 4. var sizes = ["S", "M", "XL", "XXL", "XXXL"].
// Insert "L" into the array between "M" and "XL".
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.splice(2, 0, "L");

// 5. var sizes = ["S", "M", "XL", "XXL", "XXXL"].
// Copy the first 3 sizes of the array and put them into a new array,
// regSizes.
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
var regSizes = sizes.slice(0, 3);

// 6. var pets = ["dog", "cat", "ox", "duck", "frog"].
// Add 2 elements after "dog" and remove "cat", "ox", and "duck".
var pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(1, 3, "elephant", "giraffe");

// 7. var pets = ["dog", "cat", "ox", "duck", "frog"];
// Remove "cat" and "ox".
var pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(1, 2);

// 8. var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
// Reduce it to "duck" and "frog" using slice.
var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
var reducedPets = pets.slice(3, 5);