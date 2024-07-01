/*
- **Question:** Create a function `greet` that takes two parameters: `name` and `greeting`. The `greeting` parameter should have a default value of `"Hello"`. The function should print a greeting message using the provided or default greeting. Test the function by calling it with and without the `greeting` parameter.
- **Hint:** Use the syntax `function greet(name, greeting = "Hello")`.
*/

 function greet(name,greeting="Hello")
{
    console.log(`${greeting} , ${name}`);
}
greet("Rohit","Namaste");//actual parameter appeared as a result rather thean that of the formal value 
greet("Rohit");