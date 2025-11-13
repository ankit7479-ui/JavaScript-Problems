/*Given an array of numbers, use `map()` to create a
new array where each number is squared.*/

const numbers = [1,2,3,4,5,6,7,8,9,10];

const squaredBumbers = numbers.map(function(num){
    return num * num;
})
console.log(squaredBumbers);

    