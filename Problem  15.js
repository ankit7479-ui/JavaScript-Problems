let num;

while(true){
    num = +prompt("Enter a number :");
    if(num % 2 === 0){
        alert("you entered an even number " + num);
        break;
    }
    alert("you entered an odd number " + num);

}