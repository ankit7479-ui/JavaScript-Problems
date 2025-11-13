/* Write a function that uses object destructuring
inside parameters to extract and print `name` and
`age`. */

function printNameAndAge({name,age,city}){
    console.log(`Name: ${name}, Age: ${age}, city: ${city}`);

}
printNameAndAge({name:"Alice", age: 27, city : "Bhopal"});
printNameAndAge({name:"Bob", age: 27, city : "Indore"});
