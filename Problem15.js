/*Use `reduce()` to find the total salary from an array
of numbers `[1000, 2000, 3000]`.*/ 
 
let salary = [10000, 20000, 30000];

let totalsalary = salary.reduce(function(acc, curr){
    return acc + curr;

},0);
console.log(totalsalary);