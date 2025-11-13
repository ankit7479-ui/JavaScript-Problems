/*Create an array of names and use `some()` and
`every()` to test a condition (e.g., all names longer than
3 chars). */

let names = ["alice", "bob", "charlie", "dave"];

let allLongerThan3 = names.every(names => names.length > 3);
let allLongerThan2 = names.some(names => names.length > 3);

console.log(allLongerThan2);
console.log(allLongerThan3); 
