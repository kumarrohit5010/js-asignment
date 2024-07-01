/*
Write a JavaScript function that takes a number as a parameter and throws a custom 
'Error' if the number is not an integer.
*/
function validateInteger(number) 
{
    if (!Number.isInteger(number)) 
        {
        throw new Error('Invalid number: Expected an integer.');
        }
    // If it reaches here, number is an integer
    console.log('Valid integer:', number);
}

// Example usage:
try {
    validateInteger(5); // Valid integer: 5
    validateInteger(3.14); // Throws Error: Invalid number: Expected an integer.
} catch (error) {
    console.error(error.message);
}
/*
validate Integer takes number as a parameter.
Number.isInteger(number) checks if number is an integer.
If number is not an integer, throw new Error('Invalid number: Expected an integer.') throws a custom error message.
If number is an integer, it logs a message indicating it's valid.
The try...catch block is used to catch the error thrown by validateInteger when called with a non-integer number (3.14 in this example).




*/