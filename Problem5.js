
    //Write a JS function to get the length of an array without using the built-in length Property.
    function getArrayLength(arr){
        let count = 0;
        for(let i in arr){
            count++;
        }
        return count;
    }
    getArrayLength([1,2,3,4,5,6]);