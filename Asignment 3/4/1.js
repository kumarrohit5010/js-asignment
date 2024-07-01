/*
- **Question:** Define an object `person` with properties `name`, `age`, and `city`. Use object destructuring to extract these properties into individual variables and print them.
- **Hint:** Use the syntax `const { name, age, city } = person`.
*/

const person={
    fulName:"Rohit kumar yadav",
    age:20,
    city:"Dharan",
}
// Using object destructuring to extract properties
const { fulName, age, city} = person;

// Printing the extracted properties
console.log(`Name: ${fulName}`);
console.log(`Age: ${age}`);
console.log(`City: ${city}`);

// console.log(person);  //accesing of the whole  object
// //accesing the member of the object
// console.log(person.fulName)