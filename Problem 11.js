let word;
let yesCount = 0;

console.log("Type words (type 'stop' to end):");
while(true){
    word = prompt("Enter a word");

    if(word === "stop"){
        break;
    }
    if(word ==="yes"){
        yesCount++;
    }
}
console.log(`You entered "yes" ${yesCount} times.`);