function addNumbers(...nums){
    let sum = 0;
    for(let num of nums){
        sum += num;
    }
}
addNumbers(1,2,3,4,5);