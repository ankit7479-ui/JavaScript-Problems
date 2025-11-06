const start = parseInt(prompt("Enter the start number:"), 10);
const end = parseInt(prompt("Enter the end number:"), 10);

if (isNaN(start) || isNaN(end)) {
    console.log("Invalid input. Please enter valid numbers.");
} else {
    for (let i = start; i <= end; i++) {
        console.log(i);
    }
}