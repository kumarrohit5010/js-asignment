/*
- **Question:** Create an array `colors` containing the elements `"red"`, `"green"`, and `"blue"`. Use array destructuring to assign the first two elements to variables `firstColor` and `secondColor`, and print these variables.
- **Hint:** Use the syntax `const [firstColor, secondColor] = colors`.
*/

// Defining  the colors array
const colors = ["red", "green", "blue"];

// Using array destructuring to asign value
const [firstColor, secondColor] = colors;

// Printing the variables
console.log(`First color: ${firstColor}`);
console.log(`Second color: ${secondColor}`);
