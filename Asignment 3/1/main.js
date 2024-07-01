// Importing functions from mathOperations.js
import { add, subtract } from './mathOperation.js';

// Example usage
const num1 = 10;
const num2 = 5;

// Using the imported functions to add and subtract
const sum = add(num1, num2);
const difference = subtract(num1, num2);

// Logging the results
console.log(`The sum of ${num1} and ${num2} is: ${sum}`);
console.log(`The difference of ${num1} and ${num2} is: ${difference}`);